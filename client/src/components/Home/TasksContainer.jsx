import CardTask from "./CardTask";
import HomeFooter from "./HomeFooter";

const TaskContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-3">
      <div
        id="cards-container"
        className="w-full max-w-[1500px] h-full max-h-[700px] flex justify-center flex-wrap gap-5 p-4 overflow-y-scroll"
      >
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-blue-500"} />
        <CardTask cardConfig={"bg-blue-500"} />
        <CardTask cardConfig={"bg-yellow-700"} />
        <CardTask cardConfig={"bg-zinc-400"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />
        <CardTask cardConfig={"bg-yellow-500"} />

        <HomeFooter />
      </div>
    </div>
  );
};

export default TaskContainer;
