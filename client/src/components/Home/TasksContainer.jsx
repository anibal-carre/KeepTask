import HomeFooter from "./HomeFooter";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-3">
      <div
        id="cards-container"
        className="w-full max-w-[1500px] h-full max-h-[700px]  flex justify-center flex-wrap gap-5 p-4 overflow-y-scroll"
      >
        <TaskCard cardConfig={"bg-red-400"} />
        <TaskCard cardConfig={"bg-yellow-300"} />
        <TaskCard cardConfig={"bg-green-500"} />
        <TaskCard
          cardConfig={"bg-zinc-800"}
          titleConfig={"text-white"}
          textConfig={"text-white"}
        />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-800"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-yellow-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />
        <TaskCard cardConfig={"bg-zinc-300"} />

        <HomeFooter />
      </div>
    </div>
  );
};

export default TaskContainer;
