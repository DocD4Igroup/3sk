"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookies-accepted");
        if (!accepted) setVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookies-accepted", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-[1000] bg-white border-t border-gray-300 px-4 py-4 text-sm text-gray-800 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <span>
        Vi använder cookies för att förbättra din upplevelse på vår webbplats.
      </span>
            <button
                onClick={acceptCookies}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
                Godkänn
            </button>
        </div>
    );
}