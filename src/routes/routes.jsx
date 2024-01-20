import Layout from "../components/Layout";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Trackly from "../pages/projects/Trackly";
import CarCar from "../pages/projects/CarCar";
import HealthGPT from "../pages/projects/HealthGPT";
import PerfectlyPlanned from "../pages/projects/PerfectlyPlanned";
import MiMood from "../pages/projects/MiMood";

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
      {
        path: "/mimood",
        element: <MiMood />,
      },
    ],
  },
];
