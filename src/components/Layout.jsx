import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <Outlet />
      </div>
      <div>
        <footer class="footer">
          <a href="https://www.linkedin.com/in/italiz-vazquez/">
            <img
              src="https://img.icons8.com/?size=1x&id=xuvGCOXi8Wyg&format=png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/Itav8">
            <img
              src="https://img.icons8.com/?size=1x&id=62856&format=png"
              alt="GitHub"
            />
          </a>
          <a href="https://gitlab.com/Itav8">
            <img
              src="https://img.icons8.com/?size=1x&id=epZz7YMDqqwA&format=png"
              alt="GitLab"
            />
          </a>
        </footer>
      </div>
    </div>
  );
};
export default Layout;
