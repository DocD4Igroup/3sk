"use client";
import TopbarMenu from "./TopbarMenu";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { useEffect, useState } from "react";
import SidebarMenu from "@/components/SidebarMenu";

export default function LayoutWrapper({ children }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <GoogleAnalytics trackingId="G-W0WP72RR83" />

            {/* Header (Topbar) */}
            <header className="fixed top-0 left-0 right-0 z-50">
                <TopbarMenu />
            </header>

            {/* Body */}
            <div className="flex pt-16">
                {/* Sidebar – endast för md och uppåt */}
                <aside className="hidden md:flex fixed top-16 left-0 bottom-0 w-55 z-40 bg-gradient-to-b from-black to-gray-400 text-white overflow-y-auto">
                    <SidebarMenu />
                </aside>

                {/* Main content */}
                <main className="flex-1 pt-4 pb-24 px-4 sm:px-6 lg:px-8 md:ml-55">
                    <div className="max-w-5xl mx-auto">{children}</div>
                </main>
            </div>

            {/* Footer */}
            <footer className="w-full bg-white">
                <Footer />
            </footer>

            {/* Cookie banner */}
            <CookieBanner />
        </div>
    )
}