import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import PlaceholderPage from "../pages/PlaceholderPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route
          path="/jobs"
          element={<PlaceholderPage title="Job Openings" />}
        />

        <Route
          path="/candidates"
          element={<PlaceholderPage title="Candidates" />}
        />

        <Route
          path="/applications"
          element={<PlaceholderPage title="Applications" />}
        />

        <Route
          path="/reports"
          element={<PlaceholderPage title="Reports" />}
        />
      </Route>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}