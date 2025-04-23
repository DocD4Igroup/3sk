"use client";
import { useEffect } from "react";

export default function GoogleAnalytics({ trackingId }) {
    useEffect(() => {
        if (!trackingId) return null;

        const script1 = document.createElement("script");
        script1.setAttribute("async", "");
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
        document.head.appendChild(script2);
    }, [trackingId]);

    return null;
}