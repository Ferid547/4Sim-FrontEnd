import navbarData from "../../data/NavbarData";
import logoImg from "../../images/navbar/logo.png";
import arrowIcon from "../../icons/arrow.svg";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav>
      <div className="logo">
        <img src={logoImg} alt="" />
      </div>

      <div className="nav_btns">
        {navbarData.map((data, index) => (
          <div key={data.id}>
            <button className="title" onClick={() => toggleDropdown(index)}>
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
    </nav>
  );
};

export default Navbar;
