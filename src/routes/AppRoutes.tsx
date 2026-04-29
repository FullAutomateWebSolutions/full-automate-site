import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import SobrePage from "../pages/SobrePage";
import ContatoPage from "../pages/ContatoPage";
import LoginPage from "../pages/admin/Login";
import DashboardPage from "../pages/admin/Dashboard";
import PrivateRoute from "./PrivateRoute";

type Props = {
  dark: boolean;
  toggleTheme: () => void;
};

export default function AppRoutes({ dark, toggleTheme }: Props) {
  return (
    <Routes>
      <Route element={<MainLayout dark={dark} toggleTheme={toggleTheme} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}


