import { Link, NavLink, useLocation } from "react-router-dom";
import horizonLogo from "../../assets/images/Horizon Logo_Purple.png";
// import Icon from "../../components/Icon/Icon";
// import { ReactComponent as EmployeeIcon } from "../../assets/icons/user.svg";
// import { ReactComponent as OverViewIcon } from "../../assets/icons/clock.svg";
// import { ReactComponent as CompanyIcon } from "../../assets/icons/building.svg";
// import { ReactComponent as TrackingIcon } from "../../assets/icons/location.svg";
import { LiaUserTieSolid } from "react-icons/lia";
import { BiBuildings } from "react-icons/bi";
import { LuClock1 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { ROUTES } from "../../constant/routes";
import "./Sidebar.scss";
const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <Link to={ROUTES.HOME}>
          <img src={horizonLogo} alt="Horizon Logo" />
        </Link>
      </div>
      <ul className="sidebar__nav">
        <li
          className={`sidebar__nav-item ${
            location.pathname === ROUTES.OVERVIEW
              ? "sidebar__nav-item--active"
              : ""
          }`}
        >
          <NavLink to={ROUTES.OVERVIEW}>
            <div>
              <LuClock1 size={20} />
              Overview
            </div>
          </NavLink>
        </li>
        <li
          className={`sidebar__nav-item ${
            location.pathname === ROUTES.REQUEST_TRACKING
              ? "sidebar__nav-item--active"
              : ""
          }`}
        >
          <NavLink to={ROUTES.REQUEST_TRACKING}>
            <div>
              <SlLocationPin size={20} />
              Request Tracking
            </div>
          </NavLink>
        </li>
        <li
          className={`sidebar__nav-item ${
            location.pathname === ROUTES.EMPLOYEE_MANAGEMENT
              ? "sidebar__nav-item--active"
              : ""
          }`}
        >
          <NavLink to={ROUTES.EMPLOYEE_MANAGEMENT}>
            <div>
              <LiaUserTieSolid size={20} />
              Employment Management
            </div>
          </NavLink>
        </li>
        <li
          className={`sidebar__nav-item ${
            location.pathname === ROUTES.COMPANY_MANAGEMENT
              ? "sidebar__nav-item--active"
              : ""
          }`}
        >
          <NavLink to={ROUTES.COMPANY_MANAGEMENT}>
            <div>
              <BiBuildings size={20} />
              Company Management
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
