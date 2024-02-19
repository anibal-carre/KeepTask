import { useState, useEffect } from "react";

import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const storedViewStyle = localStorage.getItem("viewStyle");
  const [theme, setTheme] = useState(storedTheme || "light");
  const [viewStyle, setViewStyle] = useState(
    storedViewStyle || "flex" || "grid"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("viewStyle", viewStyle);
  }, [viewStyle]);

  return (
    <DataContext.Provider value={{ theme, setTheme, viewStyle, setViewStyle }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
