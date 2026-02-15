import { Shield, MapPin, Zap, Clock, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const Hero = () => {
    return (
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-[#f8fafc] text-center overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">

                    {/* Shield Icon Container */}
                    <div className="relative mb-6 md:mb-8 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-12 w-12 md:h-16 md:w-16 rounded-full bg-blue-400 opacity-10"></span>
                        <span className="animate-pulse absolute inline-flex h-16 w-16 md:h-20 md:w-20 rounded-full bg-blue-100 opacity-40"></span>

                        {/* Main Circle - Glass effect */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white flex items-center justify-center border border-blue-100 shadow-xl shadow-blue-900/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-600 stroke-[1.5px]" />

                            {/* Red Status Dot */}
                            <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5 md:h-4 md:w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-red-500 border-2 border-white"></span>
                            </div>
                        </div>
                    </div>

                    {/* Main Title - Scaled for mobile responsiveness */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                        ResQC <span className="text-blue-600">5</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 px-4">
                        Smart Emergency Response Ecosystem
                    </p>

                    {/* Description Text */}
                    <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed font-light px-4">
                        Connecting citizens with emergency responders through <span className="text-slate-800 font-normal">intelligent routing</span>
                        and <span className="text-slate-800 font-normal">real-time coordination</span>. Faster responses save lives.
                    </p>

                    {/* Location Badge */}
                    <div className="mt-8 flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-[10px] md:text-xs font-semibold tracking-wide">
                        <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" strokeWidth={2.5} />
                        QUEZON CITY, PHILIPPINES
                    </div>

                    {/* Action Buttons - Full width on tiny screens */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
                        <button className="bg-[#ef4444] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-base font-bold flex items-center justify-center gap-2 
                        transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-2xl shadow-lg shadow-red-200 active:scale-95">
                            Get Started Now
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <button className="bg-white text-slate-700 border border-slate-200 px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-base font-bold 
                        transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 active:scale-95">
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats Row - 1 col on mobile, 3 cols on tablet/desktop */}
                    <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 bg-white/50 backdrop-blur-sm border border-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 w-full shadow-sm gap-6 md:gap-8">

                        {/* Stat 1 */}
                        <div className="flex flex-row md:flex-row lg:flex-row items-center gap-4 justify-start md:justify-center md:border-r border-slate-100 last:border-0 pb-4 md:pb-0 border-b md:border-b-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg md:text-xl font-bold text-slate-900">25-40%</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">Faster Response</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-row md:flex-row lg:flex-row items-center gap-4 justify-start md:justify-center md:border-r border-slate-100 last:border-0 pb-4 md:pb-0 border-b md:border-b-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg md:text-xl font-bold text-slate-900">24/7</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">Active Shield</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-row md:flex-row lg:flex-row items-center gap-4 justify-start md:justify-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg md:text-xl font-bold text-slate-900">99.9%</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">System Uptime</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Reveal>
        </section>

    );
};

export default Hero;