import { useState, useEffect } from "react";

import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <DataContext.Provider value={{ theme, setTheme }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
