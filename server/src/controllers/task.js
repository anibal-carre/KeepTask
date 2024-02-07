import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { user_id, title, description } = req.body;

    const newTask = new Task({
      user_id: user_id,
      title: title,
      description: description,
      bg_color: "bg-black",
      text_color: "text-black",
      text_font: "font-mono",
      fixed: false,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    await newTask.save();

    const task = await Task.findOne({ user_id: user_id });

    res.status(201).json(task);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getTasks = async (req, res) => {
  const findTasks = await Task.find({ user_id: req.params.user_id });

  res.status(200).json(findTasks);
};

export const findTask = async (req, res) => {
  const findTask = await Task.findOne({ _id: req.params._id });

  res.status(200).json(findTask);
};

export const editTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params._id, {
    title: req.body.title ? req.body.title : task.title,
    description: req.body.description ? req.body.description : task.description,
    bg_color: req.body.bg_color ? req.body.bg_color : "bg-blue",
    text_color: req.body.text_color ? req.body.text_color : "color-black",
    text_font: req.body.text_font ? req.body.text_font : "font-mono",
    fixed: req.body.fixed ? req.body.fixed : false,
    updated_at: Date.now(),
  });

  return res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const findTask = await Task.findByIdAndDelete({ _id: req.params._id });

  return res.status(200).json(findTask);
};
