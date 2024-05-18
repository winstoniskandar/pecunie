"use client"
import { useState } from "react";
// Animations
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [ showMenu, setShowMenu ] = useState(false);

    function handleToggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
       <>
            <header className={"fixed top-0 left-0 w-screen h-20 border-b border-neutral-200 flex justify-center px-10 bg-white z-20"}>
                <div className={"flex items-center justify-between h-full max-w-7xl w-full"}>
                    <div>
                        <span className={"text-xl font-semibold"}>Pecunie</span>
                    </div>
                    <nav className={"hidden lg:flex items-center gap-8"}>
                        <a href={"#product"} className={"nav-item selected"}>Product</a>
                        <a href={"#product"} className={"nav-item"}>Use Case</a>
                        <a href={"#features"} className={"nav-item"}>Features</a>
                        <a href={"#faq"} className={"nav-item"}>FAQ</a>
                    </nav>
                    {/* <div className={"hidden lg:block"}>
                        <button className={"flex items-center gap-3 border rounded-xl py-2 px-4 border-neutral-700 hover:scale-105 transition-transform"}>
                            <span>Join the Waitlist</span>
                            <i className="fa-light fa-arrow-up-right text-xl"></i>
                        </button>
                    </div> */}
                    <div className={"hidden lg:flex items-center gap-4 text-3xl"}>
                        <button className={"hover:text-violet-700 transition-colors"}>
                            <i className="fa-brands fa-discord"></i>
                        </button>
                        <button className={"hover:text-violet-700 transition-colors"}>
                            <i className="fa-brands fa-x-twitter"></i>
                        </button>
                        <button className={"hover:text-violet-700 transition-colors"}>
                            <i className="fa-solid fa-envelope"></i>
                        </button>
                    </div>
                    <div className={"block lg:hidden"}>
                        <button onClick={handleToggleMenu}>
                            <i className={`text-3xl fa-regular ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {showMenu ? (
                    <motion.div
                        initial={{ top: '-15rem' }}
                        animate={{ top: '5rem' }}
                        exit={{ top: '-15rem' }}
                        className={"fixed w-screen top-20 left-0 flex flex-col items-center gap-5 border-b border-neutral-900 py-10 z-10 bg-bg"}
                    >
                        <nav className={"flex flex-col items-center gap-4 text-lg"}>
                            <a href={"#product"} className={"nav-item selected"}>Product</a>
                            <a href={"#product"} className={"nav-item"}>Use Case</a>
                            <a href={"#features"} className={"nav-item"}>Features</a>
                            <a href={"#faq"} className={"nav-item"}>FAQ</a>
                        </nav>
                        <div className={"block"}>
                            <button className={"flex items-center gap-3 border rounded-xl py-2 px-4 border-neutral-700 hover:scale-105 transition-transform"}>
                                <span>Join the Waitlist</span>
                                <i className="fa-light fa-arrow-up-right text-xl"></i>
                            </button>
                        </div>
                        <div className={"flex items-center gap-3 text-3xl"}>
                            <button className={"hover:text-violet-700 transition-colors"}>
                                <i className="fa-brands fa-discord"></i>
                            </button>
                            <button className={"hover:text-violet-700 transition-colors"}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </button>
                            <button className={"hover:text-violet-700 transition-colors"}>
                                <i className="fa-solid fa-envelope"></i>
                            </button>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
       </> 
    )
}