import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-white.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "User logOut successfully.",
        });
      })
      .catch();
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/addproduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary" : ""
        }
      >
        Add Product
      </NavLink>

      <NavLink
        to="/mycart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary" : ""
        }
      >
        My Cart
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary" : ""
        }
      >
        Login
      </NavLink>
    </>
  );
  return (
    <div className="bg-black">
      <div className="navbar container mx-auto px-3 sm:px-0 py-5 text-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5 text-lg font-normal text-white"
            >
              {navLinks}
            </ul>
          </div>

          <NavLink to={"/"} className="w-36">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-lg font-normal text-white">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <h4>{user.displayName}</h4>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
