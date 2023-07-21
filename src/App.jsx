import { Routes, Route } from "react-router-dom";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { DashBoard } from "./pages/Dashboard";
import { PrivateRouteLayout } from "./layouts/PrivateRouteLayout";
import { Error } from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />

        {/* Private pages */}
        <Route element={<PrivateRouteLayout />}>
          <Route path="/dashboard/overview" element={<DashBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
