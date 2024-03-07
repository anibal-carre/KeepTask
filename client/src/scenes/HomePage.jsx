import CreateTaskBar from "../components/Home/CreateTaskBar";
import HomeFooter from "../components/Home/HomeFooter";
import HomeHeader from "../components/Home/HomeHeader";
import TaskContainer from "../components/Home/TasksContainer";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <HomeHeader />
      <CreateTaskBar />
      <TaskContainer />
    </div>
  );
};

export default HomePage;
