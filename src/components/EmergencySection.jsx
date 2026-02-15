import {
    Map, Phone, Radio, AlertOctagon,
    Wifi, AlertCircle, ChevronRight
} from "lucide-react";
import { Reveal } from "./Reveal";

const EmergencySection = () => {
    return (

        <section className="py-16 md:py-24 bg-white text-center overflow-hidden">
            <Reveal>
                <div className="max-w-6xl mx-auto px-6">

                    {/* Header Section */}
                    <div className="mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Emergency Command Center</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 px-2">
                            Critical Response Portal
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto px-4">
                            Unified coordination for rapid emergency deployment and citizen safety.
                        </p>
                    </div>

                    {/* Central SOS Button - Scaled for Mobile/Desktop */}
                    <div className="relative flex justify-center items-center mb-16 md:mb-20">
                        <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />

                        <div className="absolute w-36 h-36 md:w-44 md:h-44 border-2 border-red-500/20 rounded-full animate-ping" />
                        <div className="absolute w-48 h-48 md:w-60 md:h-60 border border-red-500/10 rounded-full animate-[ping_3s_linear_infinite]" />

                        <button className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] text-white flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(239,68,68,0.4)] hover:shadow-[0_30px_60px_rgba(239,68,68,0.6)] group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />

                            <AlertOctagon className="relative z-10 w-10 h-10 md:w-14 md:h-14 mb-1 md:mb-2 transition-transform duration-700 group-hover:rotate-[360deg]" strokeWidth={2} />
                            <span className="relative z-10 text-3xl md:text-4xl font-black tracking-tighter">SOS</span>
                            <span className="relative z-10 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1 text-red-100">
                                Emergency Trigger
                            </span>
                        </button>
                    </div>

                    {/* Navigation Grid - 1 Col on Mobile, 3 Col on Tablet+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-16 md:mb-20">
                        <button className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 px-8 rounded-2xl font-bold transition-all duration-300 hover:bg-black hover:shadow-xl hover:-translate-y-1">
                            <Map className="w-5 h-5 text-blue-400" />
                            <span className="text-sm">Strategic Map</span>
                        </button>

                        <button className="flex items-center justify-center gap-3 bg-white text-slate-800 py-4 px-8 rounded-2xl font-bold border-2 border-slate-100 transition-all duration-300 hover:border-slate-900 hover:shadow-xl hover:-translate-y-1">
                            <Phone className="w-5 h-5 text-red-500" />
                            <span className="text-sm">Direct Line</span>
                        </button>

                        <button className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-8 rounded-2xl font-bold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1">
                            <Radio className="w-5 h-5 text-blue-200" />
                            <span className="text-sm">Dispatch RF</span>
                        </button>
                    </div>

                    {/* Action Cards - Stack on Mobile, Side-by-side on MD+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
                        {/* Citizen Card */}
                        <div className="bg-slate-50/50 border border-slate-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 cursor-pointer group">
                            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                                <AlertCircle className="w-7 h-7 text-red-600" />
                            </div>
                            <div>
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                    <h4 className="text-slate-900 font-black text-lg md:text-xl tracking-tight">For Citizens</h4>
                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                                    Trigger the SOS protocol to transmit high-precision GPS telemetry to the nearest rescue unit instantly.
                                </p>
                            </div>
                        </div>

                        {/* Responder Card */}
                        <div className="bg-slate-50/50 border border-slate-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <Wifi className="w-7 h-7 text-blue-600" />
                            </div>
                            <div>
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                    <h4 className="text-slate-900 font-black text-lg md:text-xl tracking-tight">For Responders</h4>
                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                                    Sync with the ResQC network to receive optimized navigation routes and real-time incident briefs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hotline Footer */}
                    <div className="relative pt-12">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        <p className="text-slate-400 font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-2">
                            System Default Hotline
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <p className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                                911
                            </p>
                        </div>
                        <p className="mt-4 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4">Quezon City Division</p>
                    </div>

                </div>
            </Reveal>
        </section>

    );
};

export default EmergencySection;