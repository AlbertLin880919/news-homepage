import React, { useState } from "react";
import { linkList } from "../constants";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center">
            <img src="/images/logo.svg" alt="logo" />
            <div className="cursor-pointer md:hidden z-10">
                {/* mobile menu toggle*/}
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </div>
            <div
                className={`z-[5] md:hidden bg-white h-screen w-[70%] fixed top-0 ${
                    isMenuOpen ? "right-0" : "-right-[70%]"
                } transition-all duration-300`}
            >
                {" "}
                {/* mobile menu */}
                <ul className="flex flex-col items-start justify-center mt-56 gap-6 ml-6 text-xl font-bold">
                    {linkList.map((link) => (
                        <li key={link.id} className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="items-center gap-12 hidden md:flex">
                {linkList.map((link) => (
                    <li key={link.id} className="hover:text-[#F15D51] cursor-pointer">
                        {link.name}
                    </li>
                ))}
            </ul>
            {isMenuOpen && ( //mobile backdrop
                <div
                    className="fixed z-[4] top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 cursor-pointer md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
