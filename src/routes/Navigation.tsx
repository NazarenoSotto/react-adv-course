import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { routes, RouteInterface } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/* TODO: Crear Navlink dinamicos */}
              {routes.map(({ to, name }: RouteInterface) =>
                name ? (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        (isActive ? "nav-active " : "") + "custom-nav-link"
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ) : undefined
              )}
              {/* <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 3
              </NavLink>
            </li> */}
            </ul>
          </nav>

          <Routes>
            {/* TODO: Crear Route Dinamicamente */}
            {routes.map(
              ({
                component: Component,
                path,
                redirectTo,
                to,
              }: RouteInterface) =>
                redirectTo ? (
                  <Route
                    key={path}
                    path="/*"
                    element={<Navigate to="/lazy1" replace />}
                  />
                ) : Component ? (
                  <Route key={to} path={path} element={<Component />} />
                ) : undefined
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
