import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
export default function Navbar() {
  const activeStyle = ({ isActive }) => {
    if (isActive) return style.active;
  };
  return (
    <nav className={style.navbar}>
      <span className={style.banner}>
        <NavLink to="/home">SOCIAL</NavLink>
      </span>
      <div className={style.navLink}>
        <NavLink
          to="/login"
          className={activeStyle}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={activeStyle}
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
}
