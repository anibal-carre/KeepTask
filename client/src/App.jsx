import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingHome from "./scenes/LandingHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
