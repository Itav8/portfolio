import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";

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
];
