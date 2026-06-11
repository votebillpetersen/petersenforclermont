"use client";

import { useEffect, useRef } from "react";

/**
 * Background video for the homepage hero, hardened for Safari autoplay.
 *
 * Required for Safari muted-autoplay to work, all of these must be true:
 *
 *   1. JSX attributes use camelCase (`autoPlay`, `playsInline`) — lowercase
 *      forms like `autoplay` / `playsinline` are silently ignored by React.
 *   2. `muted` must be set as a JS PROPERTY at runtime, not just an HTML
 *      attribute. React has historically rendered the attribute but left
 *      the underlying property as `false` during hydration. Safari checks
 *      the property, so we set it explicitly in useEffect below.
 *   3. The legacy `webkit-playsinline` attribute helps iOS Safari < 10.
 *   4. Even with autoplay set, Safari can fail to start it silently. We
 *      explicitly call `.play()` immediately AND on the `loadedmetadata` /
 *      `canplaythrough` events, swallowing any autoplay-policy rejection.
 *   5. Safari pauses background-tab videos. We retry on `visibilitychange`.
 */
export default function HeroVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // (2) Force muted/playsInline as runtime PROPERTIES, not just attributes.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // (3) Legacy iOS Safari attribute.
    video.setAttribute("webkit-playsinline", "true");

    // (4) Explicit play() attempt with .catch() to suppress any errors.
    const attemptPlay = () => {
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch((err) => {
          // Autoplay was rejected by browser policy.
          // We can't recover without a user gesture; the navy fallback bg
          // and overlay still render correctly so the hero stays usable.
          // Surface to console for debugging but don't crash.
          // eslint-disable-next-line no-console
          console.warn("[HeroVideoBg] video.play() rejected:", err);
        });
      }
    };

    // Try immediately, in case the browser already has enough buffered.
    attemptPlay();

    // (4) Retry on loadedmetadata — fires as soon as the video's metadata
    // (duration, dimensions, codec info) has been parsed. Earliest reliable
    // signal that play() will succeed.
    const onLoadedMetadata = () => attemptPlay();
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    // (4) Retry again on canplaythrough — fires once enough has buffered to
    // play through without stalling. Belt-and-suspenders.
    const onCanPlayThrough = () => attemptPlay();
    video.addEventListener("canplaythrough", onCanPlayThrough);

    // (5) Retry when the tab regains focus (Safari pauses bg-tab videos).
    const onVisibility = () => {
      if (!document.hidden && video.paused) attemptPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      tabIndex={-1}
      className="hero-bg-video pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
    >
      <source src="/William_Bill_Petersen.mp4" type="video/mp4" />
    </video>
  );
}
