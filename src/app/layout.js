'use client';
import './globals.css'

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {useState} from "react";

export const metadata = {
    title: 'Blackout',
    description: 'Generated by create next app',
}
export default function RootLayout({children}) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [bread, setBread] = useState("Home");
    return (
        <html lang="en">
        <body className={"bg-slate-900"}>
        <Navbar setToggleSidebar={setToggleSidebar} bread={bread} setBread={setBread}/>
        <div className={"overflow-hidden"}>
            <div className={"max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8"}>
                <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} bread={bread}
                         setBread={setBread}/>
                <div className={"lg:pl-[19rem]"}>
                    <main className={"max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none"}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}

