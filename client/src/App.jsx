import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingHome from "./scenes/LandingHome";
import DataProvider from "./state/DataProvider";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import HomePage from "./scenes/HomePage";
import TrashPage from "./scenes/TrashPage";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteAuth from "./components/ProtectedRoutes/ProtectedRouteAuth";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingHome />} />

          <Route element={<ProtectedRouteAuth />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Route>

          {/* Protected Routes */}

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/trash" element={<TrashPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
