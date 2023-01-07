import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
