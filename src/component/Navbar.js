import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);

  const menuClick = () => {
    setIsActive(!isActive);
  };

  const searchClick = () => {
    setIsShow(!isShow);
  };

  const textClear = () => {
    inputRef.current.value = null;
  };

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

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url 변경
      navigate(`/?q=${keyword}`);
      textClear();
    }
  };

  return (
    <header className="header">
      <div>
        {authenticate === true ? (
          <div
            onClick={() => dispatch(authenticateAction.logout())}
            className="login-button"
          >
            <FontAwesomeIcon icon={faUser} />
            <div style={{ cursor: "pointer" }}>로그아웃</div>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div style={{ cursor: "pointer" }}>로그인</div>
          </div>
        )}
      </div>

      <div className="nav-section">
        <img
          className="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="H&M logo"
          onClick={goToHome}
        ></img>
      </div>

      <div className="menu-area">
        <button className="menu-btn" onClick={menuClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <nav className={"menu-list " + (isActive ? "active" : "")}>
          <ul>
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
          <button className="close-btn" onClick={menuClick}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </nav>

        <div className={"menu-search " + (isShow ? "active" : "")}>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-btn"
            onClick={searchClick}
          />
          <input
            type="text"
            onKeyDown={(event) => search(event)}
            placeholder="Search"
            ref={inputRef}
          />
          <button className="search-close" onClick={searchClick}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <div
          className={"bg-area " + (isActive ? "active" : "")}
          onClick={menuClick}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
