import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-400 py-12 md:py-20 px-6 border-t border-slate-800/60 relative overflow-hidden">
      <Reveal>
        {/* Decorative background glow */}
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-12 mb-16 md:mb-20">

            {/* Brand & Mission Column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-6">
                {/* Logo Image Only - No Text */}
                <img 
                  src="/assets/resqc-logo.png" 
                  alt="ResQC Logo" 
                  className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Revolutionizing Quezon City's emergency response through high-precision GPS telemetry and intelligent responder dispatch. Saving lives through seconds saved.
              </p>
              <div className="space-y-4">
                <a href="tel:911" className="flex items-center gap-3 text-sm font-bold text-white hover:text-red-400 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-red-500/10">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
                  </div>
                  911 Emergency Line
                </a>
                <div className="flex items-center gap-3 text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/10">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  Quezon City, Metro Manila
                </div>
              </div>
            </div>

            {/* Quick Links Nav */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">Platform</h4>
              <ul className="space-y-3 md:space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Operations Map</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Responder Portal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Citizen SOS</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Data Insights</a></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">Resources</h4>
              <ul className="space-y-3 md:space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">System Status</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API Keys</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">Stay Updated</h4>
              <p className="text-xs text-slate-500 mb-4 font-bold">Receive monthly safety reports and system updates.</p>
              <form className="relative group max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="agency@email.gov"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3.5 px-5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-lg transition-all flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Divider & Socials */}
          <div className="pt-10 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">
                © {currentYear} ResQC Operational Network
              </p>
              <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full" />
              <div className="flex gap-4">
                <a href="#" className="text-xs font-bold hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-xs font-bold hover:text-white transition-colors">Terms</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all group"
                >
                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer Banner */}
          <div className="mt-12 bg-red-500/5 border border-red-500/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-[11px] md:text-xs leading-relaxed text-slate-400 font-medium">
                <span className="text-red-500 font-black uppercase tracking-tighter mr-2">Official Disclaimer:</span>
                ResQC5 is a coordination enhancement tool. In all life-threatening situations, the primary protocol is to dial <span className="text-white font-bold">911</span> directly. Data provided through this portal is subject to network latency and GPS accuracy.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;