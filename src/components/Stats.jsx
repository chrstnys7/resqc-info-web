import { TrendingUp, AlertCircle, Users, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const StatCard = ({ icon: Icon, value, label, subtext, colorClass, accentColor }) => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-[2rem] p-6 flex flex-col items-center transition-all duration-500 hover:bg-slate-800/50 hover:border-slate-600 group relative overflow-hidden h-full">

      {/* Subtle Glow Effect */}
      <div className={`absolute -top-10 -right-10 w-20 h-20 blur-[40px] opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${accentColor}`} />

      {/* Icon Box - Squircle style */}
      <div className="w-12 h-12 rounded-2xl bg-slate-900/80 flex items-center justify-center mb-5 border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-500">
        <Icon className={`w-5 h-5 ${colorClass}`} strokeWidth={2} />
      </div>

      {/* Main Stats - Scaled for smaller devices */}
      <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
        {value}
      </h3>

      {/* Label */}
      <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] mb-3 px-2 text-center leading-tight ${colorClass}`}>
        {label}
      </p>

      {/* Description */}
      <p className="text-slate-400 text-[11px] leading-relaxed max-w-[200px] md:max-w-[160px] font-medium opacity-80 group-hover:opacity-100 text-center">
        {subtext}
      </p>

      {/* Interactive Bottom Bar */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full transition-all duration-500 group-hover:w-full group-hover:rounded-none ${accentColor}`} />
    </div>
  );
};

const Stats = () => {
  const statsData = [
    {
      icon: TrendingUp,
      value: "25-40%",
      label: "Faster Response",
      subtext: "Average improvement across all critical emergency types",
      colorClass: "text-blue-400",
      accentColor: "bg-blue-500"
    },
    {
      icon: AlertCircle,
      value: "99.9%",
      label: "System Uptime",
      subtext: "Reliable mission-critical infrastructure performance",
      colorClass: "text-red-400",
      accentColor: "bg-red-500"
    },
    {
      icon: Users,
      value: "1.2k+",
      label: "Active Responders",
      subtext: "Qualified personnel across the Quezon City area",
      colorClass: "text-blue-400",
      accentColor: "bg-blue-500"
    },
    {
      icon: Clock,
      value: "<5min",
      label: "Arrival Time",
      subtext: "Average duration from report to on-site assistance",
      colorClass: "text-red-400",
      accentColor: "bg-red-500"
    }
  ];

  return (

    <section className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden">
      <Reveal>
        {/* Ambient background light */}
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/5 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-red-600/5 blur-[100px] md:blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Metrics</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Impact by the Numbers
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-4 max-w-xl mx-auto font-light px-2">
              Real-world data driving our mission to save lives through coordination.
            </p>
          </div>

          {/* Stats Grid - 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Real-time Statistics Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-6 border-t border-slate-800/50 text-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                Live Feed Active
              </p>
            </div>
            <span className="hidden md:block text-slate-700">|</span>
            <p className="text-slate-500 text-[10px] md:text-xs font-medium italic">
              Last data refresh: February 2026
            </p>
          </div>
        </div>
      </Reveal>
    </section>

  );
};

export default Stats;