"use client";
import Link from "next/link";
import Image from "next/image";
import logo1 from "/assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TopbarMenu() {
    const pathname = usePathname();

    return (
        <header className="relative w-full bg-gradient-to-r from-black to-gray-400 text-white px-4 py-8 flex items-center shadow-md">
            <Link href="/" aria-label="Gå till startsidan" className="fixed top-2 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 md:left-0 lg:left-0 xl:left-0 z-50"
            >
                <Image
                    src={logo1}
                    alt="3Sk logotyp"
                    width={170}
                    height={170}
                    className="object-contain"
                    priority
                />
            </Link>

            {/* Spacer för att skjuta ikonerna till höger */}
            <div className="hidden md:flex  ml-auto items-center space-x-6">
                <a
                    href="https://www.facebook.com/groups/267127094188741"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Följ oss på Facebook"
                    className="hover:text-blue-400 transition-colors"
                >
                    <FaFacebookF size={20} />
                </a>
                <a
                    href="https://www.instagram.com/3sk_shooting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Följ oss på Instagram"
                    className="hover:text-pink-400 transition-colors"
                >
                    <FaInstagram size={22} />
                </a>
            </div>
            <div className="flex items-center space-x-4 md:hidden ml-auto">
                <HamburgerMenu/>
            </div>

        </header>
   );
}