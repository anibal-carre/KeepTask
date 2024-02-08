import logow from "../../assets/logowhite.png";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] flex items-center px-3 border border-zinc-700">
      <img src={logow} alt="logo" className="w-[100px] h-[120px]" />
    </nav>
  );
};

export default Navbar;
