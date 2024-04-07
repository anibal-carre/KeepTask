import CardTask from "./CardTask";
import HomeFooter from "./HomeFooter";
import useApiTask from "@/src/hooks/useApiTask";
import { useEffect, useState } from "react";

const TaskContainer = () => {
  const { getTasks } = useApiTask();
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();
        console.log(res);
        if (res.length === 0) {
          console.log("No tasks");
        }

        setTask(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className={`w-full h-screen flex justify-center items-center p-3`}>
      <div
        id="cards-container"
        className="w-full max-w-[1500px] h-full max-h-[700px] flex justify-center flex-wrap gap-5 p-4 overflow-y-scroll"
      >
        {tasks.length === 0 ? (
          <span className="font-semibold text-[20px] text-blue-400">
            No Tasks ...
          </span>
        ) : (
          tasks.map((task) => (
            <CardTask
              key={task._id}
              cardConfig={task.bg_color}
              titleConfig={task.title}
              textConfig={task.description}
            />
          ))
        )}
        <HomeFooter />
      </div>
    </div>
  );
};

export default TaskContainer;
