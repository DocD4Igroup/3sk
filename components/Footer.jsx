'use client';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "/assets/logo.png";



export default function Footer() {
    return (
        <div className="min-h-screen flex flex-col">
            <footer
                className="w-full bg-gradient-to-b from-black to-gray-400 text-white text-sm py-4 px-4 mt-auto"
                role="contentinfo"
                aria-label="Sidfot"
            >
                <div className="text-center">
                    <p>&copy; 2025 <span className="font-semibold">3SK</span>. Alla rättigheter förbehållna.</p>
                </div>
            </footer>
        </div>
    )
}