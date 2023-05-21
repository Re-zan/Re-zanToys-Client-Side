import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo/logo.png";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  //logut
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  //display name
  const handleDisplayNAme = () => {
    document.getElementById("disName").innerText = user?.displayName;
  };
  //mouse out
  const handleDisplayNAmeNone = () => {
    document.getElementById("disName").innerText = " ";
  };
  //menu
  const mainmenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-[#8CA6A2]"
        }
      >
        {" "}
        <li className="font-swash text-xl mx-5 my-2 h-5">Home</li>{" "}
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-[#8CA6A2]"
        }
      >
        {" "}
        <li className="font-swash text-xl mx-5 my-2 h-5">Blogs</li>{" "}
      </NavLink>
      <NavLink
        to="/all-toys"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-[#8CA6A2]"
        }
      >
        {" "}
        <li className="font-swash text-xl mx-5 my-2 h-5">All Toys</li>{" "}
      </NavLink>
      {user && (
        <>
          {" "}
          <NavLink
            to="/my-toys"
            className={({ isActive }) =>
              isActive ? "text-[#b98f9a]" : "text-[#8CA6A2]"
            }
          >
            {" "}
            <li className="font-swash text-xl mx-5 my-2 h-5">My Toys</li>{" "}
          </NavLink>
          <NavLink
            to="/add-toys"
            className={({ isActive }) =>
              isActive ? "text-[#b98f9a]" : "text-[#8CA6A2]"
            }
          >
            {" "}
            <li className="font-swash text-xl mx-5 my-2 h-5">Add Toys</li>{" "}
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-gray-800">
      <div className="navbar my_container py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-white text-2xl"
            >
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mainmenu}
            </ul>
          </div>
          {/* logo */}
          <Link to="/">
            {" "}
            <div className="flex items-center">
              <img src={logo} alt="logo" className=" h-24 " />
              <h2 className="logo text-lg md:text-5xl">Re-zanToys</h2>
            </div>
          </Link>
        </div>

        <div className="navbar-end flex items-center">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1  ">{mainmenu} </ul>
          </div>
          {user ? (
            <>
              {" "}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-16 rounded-full relative"
                    onMouseOver={handleDisplayNAme}
                    onMouseOut={handleDisplayNAmeNone}
                  >
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  <span
                    className=" text-white  p-4 absolute -top-5 end-0"
                    id="disName"
                  ></span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-center text-[#A4747F]"
                >
                  <Link to="/profile">
                    <li style={{ cursor: "pointer" }}>Profile</li>
                  </Link>

                  <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
                    Sign Out
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-[#A4747F] border-0   hover:bg-[#8CA6A2]">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
