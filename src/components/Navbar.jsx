import React from "react";

const Navbar = () => (
    <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-80 fixed w-full z-10">
        <div className="text-green-400 text-2xl font-bold">Nihar</div>
        <div className="space-x-6">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
);

export default Navbar;