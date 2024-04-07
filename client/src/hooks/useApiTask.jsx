import { useState, useEffect } from "react";
import axios from "axios";

const useApiTask = (initialConfig) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = localStorage.getItem("user");

  const parsedUser = JSON.parse(user);

  console.log(parsedUser._id);

  const baseURL = "https://keeptask-backend.onrender.com/";
  const TaskURL = baseURL + "tasks/";
  const getTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token"); // Obtener el token de localStorage
      const headers = {
        Authorization: `Bearer ${token}`, // Agregar el token al encabezado
      };

      const res = await axios.get(`${TaskURL}${parsedUser._id}`, { headers });

      const data = res.data;

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getTasks };
};

export default useApiTask;
