import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
