"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';



const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [showTopLink, setShowTopLink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            if (scrollHeight > 80) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }

            if (scrollHeight > 500) {
                setShowTopLink(true);
            } else {
                setShowTopLink(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="nav" className="fixed w-full  z-10 pt-16">
            <div className='mx-20 flex justify-between items-center'>
                <ul className="flex space-x-4">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#services">Services</Link></li>
                </ul>
                <Image src='/logo.png' alt="logo" width={200} height={100} className=''/>
            </div>
        </nav>
      
    );
};

export default NavBar;
