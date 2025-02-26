import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@material-tailwind/react";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-yellow-300 shadow-md p-4 animate-fade-in-down">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className=" sm:text-lg text-base font-bold tracking-wide font-nico">tour buddy</div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-2">
                    <a href='/' className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Home</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">About Us</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Our Most Rated Guides</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Our Packages</span>
                    </a>
                    <a href="/payment" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Payment</span>
                    </a>


                </div>

                {/* Sign In Button */}
                <div className="hidden lg:block">
                    <Button className="bg-yellow-400 text-black px-4 py-2">Sign In</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col mt-4 space-y-4 text-center">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                         <a href='/' className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Home</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">About Us</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Our Most Rated Guides</span>
                    </a>
                    <a href="#_" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Our Packages</span>
                    </a>

                    <a href="/payment" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-[#13253F] group">
                        <span className="xl:w-48 w-16 xl:h-20 h-14 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Payment</span>
                    </a>
                    <Button className="bg-yellow-400 text-black px-4 py-2">Sign In</Button>

                         </div>
                  
                </div>
            )}
        </nav>
    );
}
