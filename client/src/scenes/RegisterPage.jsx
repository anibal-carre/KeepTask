import { motion } from "framer-motion";
import NoteIcon from "../components/Icons/NoteIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import DataContext from "../state/DataContext";
import useApiAuth from "../hooks/useApiAuth";

const RegisterPage = () => {
  const { theme } = useContext(DataContext);
  const navigate = useNavigate();

  // Register Fuction

  const { register } = useApiAuth({});

  // User Data
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error
  const [error, setError] = useState(false);

  const inputAnimation = {
    initial: {
      opacity: 0.2,
      y: -60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      const userData = {
        name: name,
        last_name: lastName,
        email: email,
        password: password,
      };

      const registerResponse = await register(userData);

      console.log(`Registro exitoso:  ${registerResponse}`);
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (error) {
      console.error(`Error al registrar informaciones: ${error}`);
      setError(true);
    }
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col justify-center items-center ${
        theme == "light" ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <motion.div
        variants={inputAnimation}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="w-full flex md:w-[600px] mb-8"
      >
        <motion.div
          animate={{
            scale: [1, 1, 2, 1, 1],
            rotate: [0, 0, 60, 50, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="ml-6 md:ml-5"
        >
          <NoteIcon />{" "}
        </motion.div>
        <span className="text-blue-400 text-[30px] font-[700] cursor-pointer">
          KeepTask
        </span>
      </motion.div>

      <form
        onSubmit={handleRegister}
        className="w-full flex flex-col gap-8 md:w-[600px] h-[760px] py-10 px-14 md:px-20"
      >
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">First Name</span>
          <input
            className={`h-[45px] rounded-[5px] border border-black font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }`}
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setName(e.target.value)}
          />
        </motion.div>
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Last Name</span>
          <input
            className={`h-[45px] rounded-[5px] border border-black font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }`}
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </motion.div>
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Email</span>
          <input
            className={`h-[45px] rounded-[5px] border border-black font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }`}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Password</span>
          <input
            className={`h-[45px] rounded-[5px] border border-black font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }`}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.9 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Confirm Password</span>
          <input
            className={`h-[45px] rounded-[5px] border border-black font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }`}
            type="password"
            placeholder="Confirm your Password"
          />
        </motion.div>

        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="w-full flex justify-between items-center mt-20 gap-2"
        >
          <span className="font-[500] text-[14px] md:text-[16px] mr-2">
            Do you have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </span>
          </span>
          <button className="w-[160px] h-[50px] bg-blue-400 text-[16px] font-[600] text-white rounded-[8px] hover:bg-blue-300">
            Register
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default RegisterPage;
