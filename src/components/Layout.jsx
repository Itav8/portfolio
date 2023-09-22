import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css"

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <Outlet />
      </div>
      <div>
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
    </div>
  );
};
export default Layout;
