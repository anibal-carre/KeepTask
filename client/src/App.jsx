import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingHome from "./scenes/LandingHome";
import DataProvider from "./state/DataProvider";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingHome />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
