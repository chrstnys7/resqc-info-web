import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleSelection from "./components/RoleSelection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import DashboardPreview from "./components/DashboardPreview";
import EmergencySection from "./components/EmergencySection";
import AppShowcase from "./components/AppShowcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-charcoal">
      <Navbar />
      <Hero />
      <RoleSelection />
      <Features />
      <HowItWorks />
      <Stats />
      <DashboardPreview />
      <EmergencySection />
      <AppShowcase />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;