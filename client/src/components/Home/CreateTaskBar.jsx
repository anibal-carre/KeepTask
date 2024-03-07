import PenIcon from "../Icons/PenIcon";

const CreateTaskBar = () => {
  return (
    <nav className="w-full max-w-[800px] h-[120px] relative flex justify-center items-center mt-5">
      <input
        className="w-full max-w-[90%] h-[50px] rounded-md shadow-md text-[18px] font-[500] px-3 border focus:outline-none focus:border text-zinc-700 placeholder:text-zinc-500"
        type="text"
        placeholder="Create note..."
      />

      <PenIcon
        className={" absolute right-10 md:right-14 text-[20px] text-zinc-500"}
      />
    </nav>
  );
};

export default CreateTaskBar;
