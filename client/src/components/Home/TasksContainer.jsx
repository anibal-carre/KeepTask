import HomeFooter from "./HomeFooter";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";

const TaskContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-3">
      <div
        id="cards-container"
        className="w-full max-w-[1500px] h-full max-h-[700px] flex justify-center flex-wrap gap-5 p-4 overflow-y-scroll"
      >
        <TaskModal cardConfig={"bg-blue-500"} />
        <TaskModal cardConfig={"bg-green-500"} />
        <TaskModal />
        <TaskModal cardConfig={"bg-red-500"} />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <TaskModal />
        <HomeFooter />
      </div>
    </div>
  );
};

export default TaskContainer;
