import { motion } from "framer-motion";
import NoteIcon from "../components/Icons/NoteIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import DataContext from "../state/DataContext";
import useApiAuth from "../hooks/useApiAuth";

const LoginPage = () => {
  const { theme } = useContext(DataContext);
  const { login } = useApiAuth({});
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  // LOGIN LOGIC -------------------------

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const userData = { email, password };
      const loginResponse = await login(userData);

      setError(false);

      console.log(`Inicio de sesion exitoso: ${loginResponse}`);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setError(true);
      console.error(
        `Error en el inicio de sesion desde el component: ${error}`
      );
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
        onSubmit={handleLogin}
        className="w-full flex flex-col gap-8 md:w-[600px] h-[700px] py-10 px-14 md:px-20"
      >
        <span
          className={`${
            error ? "flex" : "hidden"
          } text-[16px] text-red-400 font-[600]`}
        >
          Email or Password Invalid
        </span>
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Email</span>
          <input
            className={`h-[45px] rounded-[5px] border font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            }  ${error ? "border-red-600" : " border-black"}`}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[16px] font-[600]">Password</span>
          <input
            className={`h-[45px] rounded-[5px] border font-[500] px-3 ${
              theme == "light" ? "bg-white" : "bg-zinc-800"
            } ${error ? "border-red-600" : " border-black"}`}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        <motion.div
          variants={inputAnimation}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="w-full flex justify-between items-center mt-20"
        >
          <span className="font-[500] text-[14px] md:text-[16px]">
            Are you new here?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </span>
          </span>
          <button className="w-[160px] h-[50px] bg-blue-400 text-[16px] font-[600] text-white rounded-[8px] hover:bg-blue-300">
            Login
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default LoginPage;
