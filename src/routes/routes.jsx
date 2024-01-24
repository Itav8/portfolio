import Layout from "../components/Layout";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Trackly from "../pages/projects/Trackly";
import CarCar from "../pages/projects/CarCar";
import HealthGPT from "../pages/projects/HealthGPT";
import PerfectlyPlanned from "../pages/projects/PerfectlyPlanned";
import MiMood from "../pages/projects/MiMood";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
        name: "Home",
      },
      {
        path: "/resume",
        element: <Resume />,
        name: "Resume",
      },
      {
        path: "/trackly",
        element: <Trackly />,
        name: "Track.ly",
      },
      {
        path: "/carcar",
        element: <CarCar />,
        name: "CarCar",
      },
      {
        path: "/healthgpt",
        element: <HealthGPT />,
        name: "HealthGPT",
      },
      {
        path: "/perfectlyplanned",
        element: <PerfectlyPlanned />,
        name: "Perfectly Planned"
      },
      {
        path: "/mimood",
        element: <MiMood />,
        name: "MiMood"
      },
    ],
  },
];
