import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
      {/* Rutas hijas van aqui */}

      <Routes>
        <Route path="Lazy1" element={<LazyPage1 />}></Route>
        <Route path="Lazy2" element={<LazyPage2 />}></Route>
        <Route path="Lazy3" element={<LazyPage3 />}></Route>

        <Route key="*" path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
