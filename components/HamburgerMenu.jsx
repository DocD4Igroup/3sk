"use client";
import logo from "/assets/logo.png"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/shooting-range", label: "Skjutbana" },
    { href: "/shop", label: "Butik" },
    { href: "/about", label: "Om oss" },
    { href: "/contact", label: "Kontakt oss" },
];
export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div className="relative z-50">
            <button
                className="md:hidden text-white"
                onClick={() => setOpen(true)}
                aria-label="Öppna meny"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {open && (
                <>
                    <div
                        className="fixed inset-0 z-40 flex"
                        onClick={() => setOpen(false)}
                    >
                        {/* Svart vänstersida med STOR logotyp */}
                        <div className="w-1/2 bg-black flex items-center justify-center">
                            <div className="relative w-52 h-52">
                                <Image
                                    src={logo}
                                    alt="Stockholm 3SK logotyp"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Vit högersida med centrerade meny-länkar */}
                        <div className="w-1/2 bg-white text-gray-900 relative flex flex-col justify-start items-center pt-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="flex flex-col gap-6 text-lg text-center">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={`transition ${
                                            pathname === href
                                                ? "text-red-700 font-semibold"
                                                : "hover:text-red-500"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                            {/* SOCIALA IKONER I MENYN */}
                            <div className="mt-10 flex justify-center space-x-6">
                                <a
                                    href="https://www.facebook.com/DITT_KONTO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Följ oss på Facebook"
                                    className="text-gray-800 hover:text-blue-600"
                                >
                                    <FaFacebookF size={22} />
                                </a>
                                <a
                                    href="https://www.instagram.com/DITT_KONTO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Följ oss på Instagram"
                                    className="text-gray-800 hover:text-pink-500"
                                >
                                    <FaInstagram size={22} />
                                </a>
                            </div>
                            {/* Stäng-knapp */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute bottom-6 right-6 text-3xl text-gray-700 hover:text-black"
                                aria-label="Stäng meny"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}