import Layout from "../components/Layout";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume"
import Trackly from "../pages/Trackly";
import CarCar from "../pages/CarCar";
import HealthGPT from "../pages/HealthGPT";
import PerfectlyPlanned from "../pages/PerfectlyPlanned";

// For React Router Routes
export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <AboutMe /> },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/trackly",
        element: <Trackly />,
      },
      {
        path: "/carcar",
        element: <CarCar />,
      },
      {
        path: "/healthgpt",
        element: <HealthGPT />,
      },
      {
        path: "/perfectlyplanned",
        element: <PerfectlyPlanned />,
      },
    ],
  },
];
