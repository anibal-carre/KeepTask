import { useContext } from "react";
import DataContext from "@/src/state/DataContext";
import CreateTaskBar from "../components/Home/CreateTaskBar";
import HomeHeader from "../components/Home/HomeHeader";
import TaskContainer from "../components/Home/TasksContainer";

const HomePage = () => {
  const { theme } = useContext(DataContext);
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center ${
        theme == "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <HomeHeader />
      <CreateTaskBar theme={theme} />
      <TaskContainer />
    </div>
  );
};

export default HomePage;
