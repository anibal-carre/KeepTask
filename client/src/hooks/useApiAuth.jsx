import { useState, useEffect } from "react";
import axios from "axios";

const useApiAuth = (initialConfig) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(initialConfig);

  const baseURL = "https://keeptask-backend.onrender.com/";
  const AuthURL = baseURL + "auth";

  const login = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${AuthURL}/login`, userData);

      const token = response.data.token;

      localStorage.setItem("token", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return response.data;
    } catch (error) {
      console.error(`Error en el inicio de sesión:, ${error}`);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(`${AuthURL}/register`, userData);

      return response.data;
    } catch (error) {
      console.log(`Error al registrar usuario:, ${error}`);
      throw error;
    }
  };

  //Logout Function

  const logout = () => {
    localStorage.removeItem("token");
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios({ ...config, headers });

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [config]);

  const execute = (newConfig) => {
    setConfig(newConfig);
  };

  return { data, error, loading, execute, login, register, logout };
};

export default useApiAuth;
