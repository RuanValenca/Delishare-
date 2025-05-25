import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../features/login/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../features/home/HomePage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path={"/login"} element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
