import AccountIcon from "../Icons/AccountIcon";
import MenuIcon from "../Icons/MenuIcon";
import MoonIcon from "../Icons/MoonIcon";
import NoteIcon from "../Icons/NoteIcon";
import { motion } from "framer-motion";
import { useContext } from "react";
import DataContext from "../../state/DataContext";
import SunIcon from "../Icons/SunIcon";

const Navbar = () => {
  const { theme, setTheme } = useContext(DataContext);
  return (
    <nav
      className={`w-full h-[80px]  flex items-center justify-between px-5 md:p-3 border border-zinc-200 ${
        theme == "dark"
          ? "bg-black shadow-sm shadow-blue-400 border-none"
          : "bg-white shadow-md"
      }`}
    >
      <div className="flex items-center">
        <motion.div
          animate={{
            scale: [1, 1, 2, 1, 1],
            rotate: [0, 0, 60, 50, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
        >
          <NoteIcon />{" "}
        </motion.div>
        <span className="text-blue-400 text-[30px] font-[700] cursor-pointer">
          KeepTask
        </span>
      </div>

      <div className="hidden md:flex">
        <nav>
          <ul className="flex items-center gap-3">
            <li className="mr-3">
              <span className="text-blue-400 text-[18px] font-[600] cursor-pointer">
                Docs
              </span>
            </li>

            <li className="mr-3">
              <span className="text-blue-400 text-[18px] font-[600] cursor-pointer">
                Blog
              </span>
            </li>

            <div className="w-[2px] rounded-sm h-[45px] bg-blue-300 mr-2"></div>

            <button className="w-[100px] h-[40px] flex justify-center items-center bg-blue-400 hover:bg-blue-300 rounded-[8px] text-[18px] font-[600] text-white">
              <AccountIcon />
            </button>

            {theme == "light" ? (
              <MoonIcon setTheme={setTheme} />
            ) : (
              <SunIcon setTheme={setTheme} />
            )}
          </ul>
        </nav>
      </div>
      <MenuIcon />
    </nav>
  );
};

export default Navbar;
