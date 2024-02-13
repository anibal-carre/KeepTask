import { useState } from "react";

import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <DataContext.Provider value={{ theme, setTheme }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
