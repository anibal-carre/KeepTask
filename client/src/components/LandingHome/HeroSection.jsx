import { motion } from "framer-motion";

const HeroSection = ({ navigate }) => {
  const titleAnimation = {
    initial: {
      opacity: 0.2,
      y: -60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="w-full h-screen">
      <div className="w-full mt-20 flex flex-col items-center px-5">
        <motion.h1
          variants={titleAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="text-blue-400 font-[700] text-[30px] md:text-[55px] mb-5"
        >
          Organize your tasks and notes with KeepTask
        </motion.h1>

        <motion.span
          variants={titleAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.9 }}
          className="text-blue-300 text-[18px] md:text-[25px] font-[600]"
        >
          A task manager with a modern and creative interface
        </motion.span>

        <motion.button
          variants={titleAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.9 }}
          className="w-[250px] h-[50px] bg-blue-400 text-[18px] font-[600] text-white rounded-[8px] mt-20 hover:bg-blue-300"
          onClick={() => navigate("/auth/login")}
        >
          Get started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
