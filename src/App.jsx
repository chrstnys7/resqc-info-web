import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleSelection from "./components/RoleSelection";
import Mission from "./components/Mission";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-charcoal">
      <Navbar />
      <main>
        <Hero />

        {/* Using semantic <section> tags with scroll-margin-top logic */}
        <section id="roles">
          <RoleSelection />
        </section>

        <section id="mission">
          <Mission />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="app">
          <AppShowcase />
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;