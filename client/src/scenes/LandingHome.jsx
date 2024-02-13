import Navbar from "../components/LandingHome/Navbar";
import { useContext } from "react";
import DataContext from "../state/DataContext";
import HeroSection from "../components/LandingHome/HeroSection";
import { useNavigate } from "react-router-dom";

const LandingHome = () => {
  const navigate = useNavigate();
  const { theme } = useContext(DataContext);

  return (
    <div
      className={`w-full min-h-screen h-auto ${
        theme == "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <header className="w-full">
        <Navbar navigate={navigate} />
      </header>

      <HeroSection navigate={navigate} />
    </div>
  );
};

export default LandingHome;
