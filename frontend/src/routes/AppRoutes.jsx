import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Stories from "../pages/Story/Story";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/story" element={<Stories />} />

      <Route
        path="/bookmarks"
        element={
          <ProtectedRoute>
            <Bookmarks />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
