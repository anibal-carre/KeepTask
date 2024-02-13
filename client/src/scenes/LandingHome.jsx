import Navbar from "../components/LandingHome/Navbar";
import { useContext } from "react";
import DataContext from "../state/DataContext";
import HeroSection from "../components/LandingHome/HeroSection";

const LandingHome = () => {
  const { theme } = useContext(DataContext);

  return (
    <div
      className={`w-full min-h-screen h-auto ${
        theme == "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <header className="w-full">
        <Navbar />
      </header>

      <HeroSection />
    </div>
  );
};

export default LandingHome;
