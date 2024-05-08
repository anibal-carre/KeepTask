import { useState, useRef, useEffect, useContext } from "react";
import DataContext from "@/src/state/DataContext";
import PinIcon from "../Icons/PinIcon";
import ModalTask from "./ModalTask";

const CardTask = ({
  children,
  cardConfig,
  titleConfig,
  textConfig,
  title,
  description,
}) => {
  const [titleModal, setTitleModal] = useState(title);
  const [descriptionModal, setDescriptionModal] = useState(description);
  const { viewStyle, setViewStyle } = useContext(DataContext);
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
    <>
      <div
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full ${cardConfig} ${
          viewStyle == "flex" ? "md:w-[200px]" : "md:w-full"
        }  h-[450px] md:h-[350px] flex flex-col rounded-md  p-2 overflow-hidden  ${
          isHovered ? "shadow-md shadow-zinc-500" : ""
        } `}
      >
        <div className="w-full flex justify-between items-center">
          <span className={`text-[18px] font-[500] ${titleConfig}`}>
            {title}
          </span>

          <div
            className={`w-[24px] h-[24px] flex justify-center items-center bg-zinc-800 rounded-full delay-100 transition-opacity ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <PinIcon className="text-[18px] text-white" />
          </div>
        </div>

        <p className={`w-full leading-relaxed ali mt-3 p-0 m-0 ${textConfig}`}>
          {description}
        </p>
      </div>

      <ModalTask
        title={title}
        description={description}
        modalOpen={modalOpen}
        modalRef={modalRef}
        cardConfig={cardConfig}
        titleModal={titleModal}
        descriptionModal={descriptionModal}
        setDescriptionModal={setDescriptionModal}
        setTitleModal={setTitleModal}
      />
    </>
  );
};

export default CardTask;
