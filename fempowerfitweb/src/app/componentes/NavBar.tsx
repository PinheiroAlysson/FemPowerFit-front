"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
interface NavBarProps {
    active: string;
}

const NavBar: React.FC<NavBarProps> = ({ active }) => {
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
      <nav id="nav" className={`navbar ${isFixed ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
            <ul className="flex space-x-4">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#services">Services</Link></li>
            </ul>
            {showTopLink && <div className="top-link">Topo</div>}
        </nav>
    );
};

export default NavBar;
