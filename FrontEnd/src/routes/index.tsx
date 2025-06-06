import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../features/login/LoginPage";
import MainLayout from "../layouts/MainLayout";
import DelishareMenu from "../features/DelishareMenu";
import About from "../features/About";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/Delishare" replace />} />
        <Route path={"/home"} element={<Navigate to="/Delishare" replace />} />
        <Route path={"/login"} element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/Delishare" element={<DelishareMenu />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}
