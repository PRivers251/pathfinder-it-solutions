import Image from "next/image";
import Header from "../components/header/Header"
import HeroSection from "./pages/home/components/HeroSection/HeroSection"

export default function Home() {
  return (
    <page className="home-page">
      <Header />
      <HeroSection />
    </page>
  );
}
