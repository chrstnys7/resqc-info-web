import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const currentProgress = (window.scrollY / totalScroll) * 100;
                setScrollProgress(currentProgress);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Features", "Dashboard", "Safety SOS", "App"];

    return (
        <>
            {/* Desktop & Main Nav Container */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 w-full z-[100] py-3 md:py-5 transition-all duration-300 ease-in-out ${isScrolled || mobileMenuOpen
                        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-900/5"
                        : "bg-transparent border-b-transparent"
                    }`}
            >
                {/* Scroll Progress Bar */}
                <div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-150 ease-out z-[101]"
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-[110]">

                    {/* Brand Identity */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
                            </span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className={`text-lg md:text-xl font-black tracking-tighter transition-colors ${(isScrolled || mobileMenuOpen) ? "text-slate-900" : "text-slate-800"
                                }`}>
                                ResQC<span className="text-red-500">5</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-10">
                        <div className="flex items-center gap-4 lg:gap-8">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`text-[10px] lg:text-[12px] font-black uppercase tracking-[0.1em] lg:tracking-[0.15em] transition-all duration-300 hover:text-red-500 relative group
                                        ${isScrolled ? "text-slate-600" : "text-slate-700"}`}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <button className="bg-slate-900 text-white px-4 py-2 lg:px-7 lg:py-2.5 rounded-xl text-[10px] lg:text-[12px] font-black uppercase tracking-wider 
                                          shadow-xl shadow-slate-900/10 transition-all duration-300 
                                          hover:bg-red-600 hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-95">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Burger Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden relative z-[120] p-2 rounded-xl transition-all active:scale-90 ${mobileMenuOpen || isScrolled
                                ? "bg-slate-900 text-white"
                                : "bg-slate-100 text-slate-900"
                            }`}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full-Screen Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 px-6 text-center">
                            {navLinks.map((item, idx) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-black text-slate-900 tracking-tighter hover:text-red-500 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 bg-red-600 text-white px-10 py-4 rounded-2xl text-base font-black uppercase tracking-widest shadow-2xl shadow-red-500/30 active:scale-95"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;