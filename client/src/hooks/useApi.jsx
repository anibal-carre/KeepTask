import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (initialConfig) => {
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

      // Realiza la solicitud al backend para autenticar al usuario
      const response = await axios.post(`${AuthURL}/login`, userData);

      // Extrae el token de la respuesta
      const token = response.data.token;

      // Guarda el token en el localStorage
      localStorage.setItem("token", token);

      // Configura el header de Axios para incluir el token en cada solicitud subsiguiente
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Devuelve la respuesta o cualquier otro dato necesario después del inicio de sesión
      return response.data;
    } catch (error) {
      // Maneja errores, por ejemplo, mostrando un mensaje de error
      console.error(`Error en el inicio de sesión:, ${error}`);

      // Puedes lanzar el error o manejarlo de alguna otra manera según tus necesidades
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(`${AuthURL}/register`);
    } catch (error) {
      console.log(`Error al registrar usuario:, ${error}`);
      throw error;
    }
  };

  // Función para realizar solicitudes con la configuración actual
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Recupera el token almacenado
      const token = localStorage.getItem("token");

      // Configura el encabezado de la solicitud con el token si está presente
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

  // Devuelve la función de inicio de sesión junto con las otras propiedades y funciones del custom hook
  return { data, error, loading, execute, login, register };
};

export default useApi;
