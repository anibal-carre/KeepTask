import PenIcon from "../Icons/PenIcon";
import { useState, useRef, useEffect, useContext } from "react";
import DataContext from "@/src/state/DataContext";
import CreateModalTask from "./CreateModalTask";

const CreateTaskBar = ({ theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <nav className="w-full  flex-col max-w-[800px] h-[120px] relative flex justify-center items-center mt-5">
      <input
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full max-w-[90%] h-[50px] rounded-md shadow-md text-[18px] font-[500] px-3 border focus:outline-none focus:border  ${
          theme == "dark"
            ? "bg-black border-blue-400 shadow-blue-400 text-zinc-200 placeholder:text-zinc-400"
            : "bg-white text-zinc-700 placeholder:text-zinc-500"
        }`}
        type="text"
        placeholder="Create note..."
      />

      <PenIcon
        className={` absolute right-10 md:right-14 text-[20px] ${
          theme == "dark" ? "text-zinc-200" : "text-zinc-800"
        }`}
      />

      <CreateModalTask modalOpen={modalOpen} modalRef={modalRef} />
    </nav>
  );
};

export default CreateTaskBar;
