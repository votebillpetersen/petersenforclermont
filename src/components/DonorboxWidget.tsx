"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://donorbox.org/widgets.js";

export default function DonorboxWidget() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML =
      '<dbox-widget campaign="re-elect-william-bill-petersen" type="donation_form" enable-auto-scroll="true"></dbox-widget>';

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      host.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} />;
}
