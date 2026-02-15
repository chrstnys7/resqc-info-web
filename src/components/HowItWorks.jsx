import { AlertCircle, Bell, Compass, CheckCircle2, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const Step = ({ number, title, description, icon: Icon, color, isLast }) => {
  const isRed = color === "red";
  const accentColor = isRed ? "bg-[#ef4444]" : "bg-[#3b82f6]";
  const shadowColor = isRed ? "shadow-red-200" : "shadow-blue-200";

  return (
    <div className="flex flex-col items-center text-center relative z-10 flex-1 group w-full">
      <div className="relative mb-6 md:mb-8">
        {/* Animated Rings */}
        <span className={`absolute inset-0 rounded-full ${accentColor} opacity-20 animate-ping scale-75`}></span>

        {/* Main Icon Container */}
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center text-white shadow-xl ${shadowColor} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10 ${accentColor}`}>
          <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>

        {/* Step Number Badge */}
        <div className={`absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-7 md:h-7 bg-white rounded-full border-2 flex items-center justify-center shadow-md z-20 ${isRed ? "border-red-500" : "border-blue-500"}`}>
          <span className={`text-[10px] md:text-[11px] font-black ${isRed ? "text-red-500" : "text-blue-500"}`}>
            {number}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-sm md:text-base font-bold text-slate-800 mb-2 tracking-tight group-hover:text-slate-900 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-[11px] md:text-[12px] leading-relaxed max-w-[140px] md:max-w-[160px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        {description}
      </p>

      {/* Vertical Connector for Mobile/Tablet-stack */}
      {!isLast && (
        <div className="md:hidden flex flex-col items-center my-6 md:my-0">
          <div className={`w-[2px] h-10 bg-gradient-to-b from-slate-100 to-transparent`} />
          <ChevronRight className="w-5 h-5 rotate-90 text-slate-200 mt-2" />
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Report Incident", description: "Citizen triggers alert with instant GPS data", icon: AlertCircle, color: "red" },
    { number: "02", title: "Smart Dispatch", description: "AI identifies and notifies nearby responders", icon: Bell, color: "blue" },
    { number: "03", title: "Rapid Navigation", description: "Optimized routing avoids traffic obstacles", icon: Compass, color: "red" },
    { number: "04", title: "Resolution", description: "Emergency is resolved and data is logged", icon: CheckCircle2, color: "blue" }
  ];

  return (

    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Operational Workflow</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-500 text-base md:text-lg mt-4 max-w-xl mx-auto font-light px-4">
              From critical incident to resolution in four seamless, high-speed steps.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] -z-0">
              <div className="w-full h-full bg-slate-100 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-40 animate-pulse" />
              </div>
            </div>

            {/* Grid Layout: 1 col on mobile, 2 cols on tablet, flex row on large desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-between items-start relative gap-y-0 sm:gap-y-12 lg:gap-0">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  {...step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Average Completion Badge */}
          <div className="flex justify-center mt-12 md:mt-20 px-4">
            <div className="group bg-slate-50/50 hover:bg-white px-6 md:px-8 py-4 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-center sm:text-left">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-xs md:text-sm font-semibold">
                  System efficiency: <span className="text-red-500 font-black tracking-tight">Under 5m Avg. Response</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

  );
};

export default HowItWorks;