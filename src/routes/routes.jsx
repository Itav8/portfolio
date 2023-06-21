import AboutMe from "../pages/AboutMe";
import CarCar from "../pages/CarCar";
import HealthGPT from "../pages/HealthGPT";
import Resume from "../pages/Resume";
import Trackly from "../pages/Trackly";

// For React Router Routes
export const routes = [
  {
    path: "/",
    element: <AboutMe />,
  },
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
];
