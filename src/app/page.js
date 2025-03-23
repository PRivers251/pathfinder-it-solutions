import Header from "../components/header/Header"
import HeroSection from "./pages/home/components/HeroSection/HeroSection"
import CopySection from "./pages/home/components/CopySection/CopySection";
import "./pages/home/home-page.css"

export default function Home() {
  return (
    <page>
    <div className="home-page">  
      <Header />
      <HeroSection />
      <CopySection />
    </div>
    </page>
  );
}
