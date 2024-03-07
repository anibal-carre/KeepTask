import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { useState } from "react";
import PinIcon from "../Icons/PinIcon";

const TaskModal = ({ cardConfig, titleConfig, textConfig }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full md:w-[200px] h-[450px] md:h-[350px] flex flex-col rounded-md border border-black p-2 overflow-hidden  ${
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

          <p
            className={`w-full leading-relaxed ali mt-3 p-0 m-0 ${textConfig}`}
          >
            the last week i and my if family go to the beach with ours parents
            in california thwe last weekend whewr dffdfd wewew
          </p>
        </div>

        {/*-------------------------------------------------------------- */}
      </DialogTrigger>
      <DialogContent
        className={`w-[500px] h-[500px] border-none ${cardConfig}`}
      >
        <DialogHeader>
          <span className="text-[20px] font-[500]">Title</span>

          <input className="border" type="text" />

          <DialogDescription>
            <span className="text-[20px] font-[500] text-black">
              Description
            </span>

            <textarea
              className="w-full border"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
