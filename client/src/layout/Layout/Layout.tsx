import { ReactElement } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="layout__navbar-wrapper ">
        <Navbar />
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
