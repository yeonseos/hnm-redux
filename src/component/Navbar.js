import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      {/* nav area */}
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      {/* logo area */}
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="H&M logo"
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>

        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} className="search-button" />
          <input type="text" placeholder="제품 검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
