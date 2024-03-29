import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";

import "../styles/Layout.css";

const Layout = () => {
  return (
    <div>
      <MobileNav />
      <Nav />
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/italiz-vazquez/">
          <img
            className="footer-icon"
            src="https://img.icons8.com/?&id=xuvGCOXi8Wyg&format=png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/Itav8">
          <img
            className="footer-icon"
            src="https://img.icons8.com/?&id=62856&format=png"
            alt="GitHub"
          />
        </a>
        <a href="https://gitlab.com/kulixa">
          <img
            className="footer-icon"
            src="https://img.icons8.com/?&id=epZz7YMDqqwA&format=png"
            alt="GitLab"
          />
        </a>
      </footer>
    </div>
  );
};
export default Layout;
