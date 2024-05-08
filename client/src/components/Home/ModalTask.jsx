import { motion, AnimatePresence } from "framer-motion";
const ModalTask = ({
  children,
  modalOpen,
  modalRef,
  cardConfig,
  title,
  description,
  titleConfig,
  textConfig,
  titleModal,
  descriptionModal,
  setDescriptionModal,
  setTitleModal,
}) => {
  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.05 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`w-[80%] h-[60%] sm:w-[450px] sm:h-auto sm:min-h-[500px] relative z-50 p-8 max-w-md rounded-lg shadow-lg ${cardConfig}`}
            ref={modalRef}
          >
            <div className="flex flex-col p-1">
              <div className="w-full h-full">
                <div className="flex flex-col gap-5 mb-8">
                  <input
                    className={`w-full h-[40px] px-3 rounded-md text-[18px] font-[500] text-zinc-900 placeholder:text-zinc-700 focus:outline-none ${cardConfig}`}
                    type="text"
                    placeholder="Title"
                    value={titleModal}
                    onChange={(e) => setTitleModal(e.target.value)}
                  />
                </div>

                <textarea
                  style={{ resize: "none" }}
                  className={`w-full h-auto min-h-[300px] text-[16px] p-2 font-[400] text-zinc-900 placeholder:text-zinc-700 focus:outline-none ${cardConfig}`}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Create a note..."
                  value={descriptionModal}
                  onChange={(e) => setDescriptionModal(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="mt-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalTask;
