import MenuIcon from "../Icons/MenuIcon";
import NoteIcon from "../Icons/NoteIcon";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] flex items-center justify-between px-5 md:p-3 border border-zinc-200 shadow-md">
      <div className="flex items-center">
        <NoteIcon />{" "}
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

            <button className="w-[100px] h-[40px] bg-blue-400 hover:bg-blue-300 rounded-[8px] text-[18px] font-[600] text-white">
              Login
            </button>
          </ul>
        </nav>
      </div>
      <MenuIcon />
    </nav>
  );
};

export default Navbar;
