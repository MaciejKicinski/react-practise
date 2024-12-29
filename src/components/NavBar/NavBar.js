import styles from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.list}>
      <ul>
        <li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.linkNotActive
              }
              to="/"
            >
              Home
            </NavLink>
          </li>{" "}
        </li>
        <li>
          <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.linkNotActive
              }
              to="/favorite"
            >
              Favorite
            </NavLink>
        </li>
        <li>
          <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.linkNotActive
              }
              to="/about"
            >
              About
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
