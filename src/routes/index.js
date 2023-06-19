import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import publicRoute, { publicNewRoute } from "./public";
export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        {publicRoute.map((data) => {
          return (
            <Route key={data.key} path={data.path} element={data.element} />
          );
        })}
        {publicNewRoute.map((data) => {
          return (
            <Route key={data.key} path={data.path} element={data.element} />
          );
        })}
      </Router>
    </BrowserRouter>
  );
}
