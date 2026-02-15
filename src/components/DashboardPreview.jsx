import {
  Bell, Activity, Clock, FileText,
  ChevronRight, MapPin, Users, BarChart3,
  AlertTriangle, Map, Zap
} from "lucide-react";
import { Reveal } from "./Reveal";

// Dashboard Stat Card
const DashboardCard = ({ icon: Icon, value, label, trend, trendColor, isLive, showDot, iconBg, iconColor, activeBorder }) => {
  return (
    <div className={`
      bg-white rounded-[2rem] p-5 md:p-6 border shadow-sm relative flex flex-col items-start min-h-[160px] md:min-h-[180px]
      transition-all duration-500 ease-out cursor-pointer overflow-hidden
      hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1
      ${activeBorder ? 'ring-2 ring-red-500 border-transparent shadow-red-100' : 'border-slate-100 hover:border-blue-200'}
      group
    `}>
      {/* Background Glow */}
      <div className={`absolute -right-4 -top-4 w-20 h-20 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${iconBg}`} />

      {showDot && (
        <div className="absolute top-5 right-5 md:top-6 md:right-6 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
        </div>
      )}

      {/* Icon Squircle */}
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm ${iconBg}`}>
        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} strokeWidth={2} />
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">{value}</h3>
        <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{label}</p>
      </div>

      <div className="mt-auto pt-4 w-full">
        {isLive ? (
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-tighter">Live Monitor</span>
          </div>
        ) : (
          <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-lg text-[9px] md:text-[10px] font-black tracking-tight ${trendColor}`}>
            {trend} <span className="opacity-60 font-medium tracking-normal">vs last hour</span>
          </span>
        )}
      </div>
    </div>
  );
};

// Alert Item Row
const AlertItem = ({ type, location, time, isPriority }) => (
  <div className={`flex items-center justify-between p-3 md:p-4 rounded-2xl border transition-all cursor-pointer group mb-3 last:mb-0 ${isPriority ? 'bg-red-50/30 border-red-100 hover:border-red-300' : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-md'}`}>
    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 ${isPriority ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
        {isPriority ? <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" /> : <Activity className="w-4 h-4 md:w-5 md:h-5" />}
      </div>
      <div className="overflow-hidden">
        <h4 className="text-slate-900 font-bold text-xs md:text-sm tracking-tight truncate">{type}</h4>
        <div className="flex items-center gap-1.5 md:gap-2 text-slate-500 text-[10px] md:text-[11px] mt-0.5">
          <MapPin className="w-3 h-3 text-blue-500 shrink-0" /> <span className="truncate">{location}</span>
          <span className="text-slate-300 shrink-0">•</span>
          <span className="flex items-center gap-1 shrink-0"><Clock className="w-2.5 h-2.5" /> {time}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 md:gap-4 shrink-0">
      <span className={`hidden xs:inline-block px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider ${isPriority ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
        {isPriority ? 'High' : 'Normal'}
      </span>
      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-blue-500 transition-all group-hover:translate-x-1" />
    </div>
  </div>
);

// Bottom Actions
const ActionCard = ({ icon: Icon, title, desc, iconBg, iconColor }) => (
  <div className="bg-white border border-slate-100 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] flex items-center gap-4 hover:shadow-xl hover:border-blue-100 transition-all cursor-pointer group">
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${iconBg}`}>
      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} />
    </div>
    <div>
      <h4 className="text-slate-900 font-black text-xs md:text-sm leading-tight mb-0.5 md:mb-1">{title}</h4>
      <p className="text-slate-500 text-[10px] md:text-xs leading-tight font-medium opacity-80">{desc}</p>
    </div>
  </div>
);

const DashboardPreview = () => {
  const stats = [
    { icon: Bell, value: "23", label: "Pending Alerts", trend: "+12%", trendColor: "bg-green-100 text-green-700", showDot: true, iconBg: "bg-red-50", iconColor: "text-red-500", activeBorder: true },
    { icon: Activity, value: "08", label: "Active Missions", isLive: true, iconBg: "bg-blue-50", iconColor: "text-blue-500" },
    { icon: Zap, value: "4.2m", label: "Avg. Dispatch", trend: "-18%", trendColor: "bg-blue-100 text-blue-700", iconBg: "bg-amber-50", iconColor: "text-amber-500" },
    { icon: FileText, value: "142", label: "Resolved Today", trend: "+24", trendColor: "bg-slate-100 text-slate-600", iconBg: "bg-slate-50", iconColor: "text-slate-400" }
  ];

  return (

    <section className="py-12 md:py-24 bg-[#F8FAFC]">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="w-6 md:w-8 h-[2px] bg-blue-500" />
                <span className="text-[10px] md:text-xs font-black text-blue-500 uppercase tracking-[0.2em]">Operations Center</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Real-time Dashboard</h2>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm self-start md:self-auto">
              <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold whitespace-nowrap">ResQC Admin</div>
              <div className="px-3 py-1.5 md:px-4 md:py-2 text-slate-500 text-[10px] md:text-xs font-bold whitespace-nowrap">Quezon City Hub</div>
            </div>
          </div>

          {/* Top Stats Grid - 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {stats.map((s, i) => <DashboardCard key={i} {...s} />)}
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">

            {/* Recent Alerts List (Full width on mobile, 2/3 on desktop) */}
            <div className="lg:col-span-2 bg-white/60 backdrop-blur-sm border border-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 rounded-lg text-red-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">Emergency Queue</h3>
                </div>
                <button className="flex items-center gap-2 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:underline decoration-2 text-left">
                  Launch Command Map <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              <div className="space-y-1">
                <AlertItem type="Critical Medical: Cardiac" location="District 4, Commonwealth" time="1m ago" isPriority={true} />
                <AlertItem type="Multiple Vehicle Collision" location="EDSA Northbound" time="4m ago" isPriority={false} />
                <AlertItem type="Residential Fire Report" location="Brgy. Santa Lucia" time="11m ago" isPriority={true} />
              </div>
            </div>

            {/* Quick Actions (Full width on mobile, 1/3 on desktop) */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest px-4 mb-1">System Actions</h3>
              <ActionCard icon={Map} title="Mission Map" desc="Global fleet tracking" iconBg="bg-blue-50" iconColor="text-blue-500" />
              <ActionCard icon={Users} title="Responders" desc="Manage active units" iconBg="bg-purple-50" iconColor="text-purple-500" />
              <ActionCard icon={BarChart3} title="Data Hub" desc="Export mission logs" iconBg="bg-emerald-50" iconColor="text-emerald-500" />
            </div>

          </div>

          {/* Footer info */}
          <div className="flex justify-center">
            <p className="text-slate-400 text-[9px] md:text-xs font-medium bg-white px-4 md:px-6 py-2 rounded-full border border-slate-100 text-center">
              System Health: <span className="text-green-500 font-bold">Optimal</span> • Network Latency: <span className="text-slate-700 font-bold">24ms</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>

  );
};

export default DashboardPreview;