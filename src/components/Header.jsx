import { NavLink } from "react-router-dom";
import "../index.css";
export default function Header() {
  const activLink = "border-b border-hover pb-2 transition-all";
  return (
    <nav className="flex justify-around p-6">
      <h1 className="Logo text-2xl font-bold ">
        <NavLink to={"/"}>
          <span className=" text-efrct">Holo</span>Gaze
        </NavLink>
      </h1>
      <ul className="flex space-x-12">
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? activLink : null)}
            to="/"
          >
            Home{" "}
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? activLink : null)}
            to="/Catalog"
          >
            Catalog{" "}
          </NavLink>{" "}
        </li>

        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? activLink : null)}
            to="/Features"
          >
            Features{" "}
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? activLink : null)}
            to="/Contact"
          >
            Contact{" "}
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}
