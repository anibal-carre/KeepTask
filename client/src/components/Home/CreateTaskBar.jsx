import PenIcon from "../Icons/PenIcon";

const CreateTaskBar = ({ theme }) => {
  return (
    <nav className="w-full  flex-col max-w-[800px] h-[120px] relative flex justify-center items-center mt-5">
      <input
        className={`w-full max-w-[90%] h-[50px] rounded-md shadow-md text-[18px] font-[500] px-3 border focus:outline-none focus:border  ${
          theme == "dark"
            ? "bg-black border-blue-400 shadow-blue-400 text-zinc-200 placeholder:text-zinc-400"
            : "bg-white text-zinc-700 placeholder:text-zinc-500"
        }`}
        type="text"
        placeholder="Create note..."
        disabled
      />

      <PenIcon
        className={` absolute right-10 md:right-14 text-[20px] ${
          theme == "dark" ? "text-zinc-200" : "text-zinc-800"
        }`}
      />
    </nav>
  );
};

export default CreateTaskBar;
