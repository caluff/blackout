'use client';
import './globals.css'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {useState} from "react";

export const metadata = {
    title: 'Blackout',
    description: 'Bar/Café',
}
export default function RootLayout({children}) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [currentSection, setCurrentSection] = useState(null)
    return (
        <html lang="en">
        <body className={"relative bg-hero bg-cover bg-no-repeat bg-center bg-fixed"}>
        <Navbar setToggleSidebar={setToggleSidebar} currentSection={currentSection}/>
        <div className={"overflow-hidden"}>
            <div className={"max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8"}>
                <Sidebar toggleSidebar={toggleSidebar}
                         setToggleSidebar={setToggleSidebar}
                         setCurrentSection={setCurrentSection}
                         currentSection={currentSection}
                />
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

