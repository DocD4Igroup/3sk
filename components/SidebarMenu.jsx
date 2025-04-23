"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo1 from "@/assets/logo.png";

const menuItems = [
    { href: "/", label: "Hem" },
    { href: "/shooting-range", label: "Skjutbana" },
    { href: "/shop", label: "Butik" },
    { href: "/about", label: "Om Klubben" },
    { href: "/contact", label: "Kontakt oss" },
];

export default function SidebarMenu() {
    const pathname = usePathname();

    return (
        <aside className="w-55 hidden md:flex fixed left-0 top-0 h-full z-40 bg-gradient-to-b from-black to-gray-400 text-white">
            <nav className="flex flex-col px-9 gap-4 mt-55" aria-label="Huvudnavigering">
                {menuItems.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-lg font-medium ${
                            pathname === href ? "text-yellow-400" : "text-white hover:text-yellow-300"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}