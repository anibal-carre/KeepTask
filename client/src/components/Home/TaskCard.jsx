import { useState } from "react";
import PinIcon from "../Icons/PinIcon";
import TaskModal from "./TaskModal";
const TaskCard = ({ cardConfig, titleConfig, textConfig }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full md:w-[200px] h-[450px] md:h-[350px] rounded-md border border-black p-2 overflow-hidden  ${
        isHovered ? "shadow-md shadow-zinc-500" : ""
      } ${cardConfig}`}
    >
      <div className="w-full flex justify-between items-center">
        <span className={`text-[18px] font-[500] ${titleConfig}`}>
          Hello World
        </span>

        <div
          className={`w-[24px] h-[24px] flex justify-center items-center bg-zinc-800 rounded-full delay-100 transition-opacity ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <PinIcon className="text-[18px] text-white" />
        </div>
      </div>

      <p className={`w-full mt-3 ${textConfig}`}>
        the last week i and my if family go to the beach with ours parents in
        california thwe last weekend whewr dffdfd wewew
      </p>

      <TaskModal />
    </div>
  );
};

export default TaskCard;
