import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Style from "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <nav>
        <Link className="link" to="/">
          <h2 className={Style.heading}>Contact List</h2>
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
