import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SobrePage from "../pages/SobrePage";
import ContatoPage from "../pages/ContatoPage";
import LoginPage from "../pages/admin/Login";
// import DashboardPage from "../pages/admin/DashboardPage";
// import PrivateRoute from "./PrivateRoute";
import LeadsPage from "../pages/admin/LeadsPage";
import DashboardPages from "../pages/admin/Dashboard";
import { lazy } from "react";
const DashboardPage = lazy(() => import("../pages/admin/DashboardPage"));
export default function AppRoutes() {
  return (
    <Routes>
        <Route                         element={<MainLayout />}>
        <Route path="/"                element={<HomePage />} />
        <Route path="/sobre"           element={<SobrePage />} />
        <Route path="/contato"         element={<ContatoPage />} />
        <Route path="/admin/dashboard" element={<DashboardPages />}/>
        <Route path="/admin/dashboards"element={<DashboardPage />}/>
        <Route path="/admin/leads"     element={<LeadsPage /> }/>
        <Route path="/admin"           element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
