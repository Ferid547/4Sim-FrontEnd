import { FaBell } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { PiBellSimpleLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/images/navbar/logo.png";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import "./AdminHeader.scss";

export const AdminHeader = () => {
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
          <div className="admin_user_box">
            <span>Ağamirzə Məmmədli</span>
            <Avatar className="avatar" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
