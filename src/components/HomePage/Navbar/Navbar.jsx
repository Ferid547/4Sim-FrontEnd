import navbarData from "../../../data/NavbarData";
import logoImg from "../../../assets/images/navbar/logo.png";
import arrowIcon from "../../../assets/icons/arrow.svg";
import "./Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = (index, data) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
    navigate(data.route);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logoImg} alt="" />
      </div>

      <div className="nav_btns">
        {navbarData.map((data, index) => (
          <div key={data.id}>
            <button
              className="title"
              onClick={() => toggleDropdown(index, data)}
            >
              {data.title}
            </button>

            {openDropdown === index && (
              <div className="dropdown show_dropdown">
                {data.subTitles.map((subTitle, index) => (
                  <div key={index} className="dropdown_item">
                    <p>{subTitle}</p>
                    <img src={arrowIcon} alt="" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="loginBtn">
        <button onClick={() => navigate("/signIn")}>Daxil ol</button>
      </div>
    </nav>
  );
};

export default Navbar;
