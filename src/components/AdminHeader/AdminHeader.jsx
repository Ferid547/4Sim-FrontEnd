import { FaBell } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { PiBellSimpleLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/images/navbar/logo.png";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import "./AdminHeader.scss";
import { useState } from "react";

export const AdminHeader = () => {
  const [userMenu, setUserMenu] = useState(false);
  const showUserMenu = () => {
    setUserMenu(!userMenu);
  };
  console.log(userMenu);

  const closeUserMenu = () => {
    setUserMenu(false);
  };
  return (
    <div className="admin">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="logo" style={{ width: "140px" }} />
        </Link>
      </div>
      <div className="admin_search">
        <input type="search" placeholder="Axtar" />
        <div className="admin_search_icon">
          <FiSearch id="search" />
        </div>
      </div>
      <div className="admin_right">
        <div className="admin_menu">
          <div className="admin_menu_icon">
            <RiBarChartHorizontalLine id="bar" />
          </div>
          <span>Menyu</span>
        </div>
        <div className="admin_user">
          <div className="admin_user_icon">
            <PiBellSimpleLight id="bell" />
          </div>
          <div className="admin_user_box" onClick={showUserMenu}>
            <span>Ağamirzə Məmmədli</span>
            <Avatar className="avatar" />{" "}
          </div>
          {userMenu && (
            <div
              className="userMenu"
              onClick={closeUserMenu}
              onMouseLeave={closeUserMenu}
            >
              <ul>
                <li>
                  <Link>Profil</Link>
                  <Link>Settings</Link>
                  <Link>Log out</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
