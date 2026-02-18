import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion"; // Ensure motion is imported

const Hero = () => {
    return (
        <section className="pt-24 md:pt-40 pb-16 md:pb-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Side: Content */}
                    <div className="flex-1 text-left">
                        <Reveal>
                            <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] tracking-tighter leading-none">
                                RES<span className="text-[#ef4444]">QC</span>
                            </h1>

                            <p className="mt-4 text-xl md:text-2xl font-bold text-[#475569] tracking-tight">
                                Smart Emergency Response Ecosystem
                            </p>

                            <p className="mt-6 max-w-lg text-lg text-slate-500 leading-relaxed font-normal">
                                Connecting citizens with emergency responders through <br className="hidden md:block" />
                                <span className="text-slate-700">intelligent routing</span> and <span className="text-slate-700">real-time coordination</span>.
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/30 text-[#2563eb] text-xs font-bold tracking-wider uppercase">
                                <MapPin className="w-4 h-4" />
                                Quezon City, Philippines
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-12 flex flex-row items-center gap-4">
                                <button className="bg-black text-white px-6 py-3 rounded-[20px] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                                    <svg viewBox="0 0 512 512" className="w-7 h-7" fill="currentColor">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 18-28.7 0-38.8zm-146.9 52.1L104.6 499l280.8-161.2-60.1-60.1z" />
                                    </svg>
                                    <div className="text-left leading-tight">
                                        <p className="text-[10px] uppercase font-medium tracking-wider text-gray-300">Get it on</p>
                                        <p className="text-xl font-semibold -mt-0.5">Google Play</p>
                                    </div>
                                </button>

                                <button className="bg-white text-[#1e293b] border border-slate-200 px-8 py-4 rounded-[20px] text-lg font-bold transition-all hover:bg-slate-50 active:scale-95 shadow-sm">
                                    Watch Demo
                                </button>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Side: Small Image with Subtle Animation */}
                    <div className="flex-1 relative flex justify-center md:justify-end">
                        <Reveal>
                            <motion.div 
                                className="relative"
                                animate={{ y: [0, -15, 0] }} // Gentle floating effect
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            >
                                {/* Glow effect background */}
                                <div className="absolute -inset-6 bg-blue-100/40 rounded-full blur-3xl z-0" />
                                
                                <img 
                                    src="/assets/resqc-mobile-app.png" 
                                    alt="ResQC Mobile App" 
                                    className="relative z-10 w-[240px] md:w-[380px] h-auto drop-shadow-xl"
                                />
                            </motion.div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;