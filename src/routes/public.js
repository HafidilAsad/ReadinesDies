import Home from "../pages/home";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Report from "../pages/report";

const publicRoute = [
  {
    key: "login",
    path: "/login",
    element: <Login />,
  },
  {
    key: "Home",
    path: "/",
    element: <Home />,
  },
  {
    key: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    key: "Report",
    path: "/reportdies",
    element: <Report />,
  },
];
export const publicNewRoute = [
  {
    key: "login",
    path: "/login2",
    element: <Login />,
  },
];
export default publicRoute;
