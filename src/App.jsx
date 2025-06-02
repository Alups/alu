import BehanceGallery from "./components/Behance";
import ContactCard from "./components/Contact";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SkillSection from "./components/Skill";
import WebPortfolioEmbed from "./components/Webportfolio";
export default function App() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white ">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('./components/img/texture.png')] opacity-100 mix-blend-overlay"></div>

      <Nav />
      <Hero />
      <SkillSection />
      <BehanceGallery />
      <WebPortfolioEmbed />
      <ContactCard />
      <Footer />
    </div>
  );
}
