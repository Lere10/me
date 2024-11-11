import React from "react";
import Logo from "../../../images/Logo.svg";
import "../../../blocks/navbar.css";
import BRflag from "../../../images/brasil_flag.png";
import downArrow from "../../../images/navbar__arrowDown.svg";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__content">
          <img src={Logo} alt="Logo" className="navbar__logo" />

          <ul className="navbar__links">
            <li className="navbar__link">Sobre mim</li>
            <li className="navbar__link">Porfólios</li>
            <li className="navbar__link">Ferramentas</li>
            <li className="navbar__link">Contatos</li>
          </ul>

          <div className="navbar__lang">
            <img className="navbar__lang-arrow" src={downArrow} />
            <img className="navbar__lang-flag" src={BRflag} />
          </div>
        </div>
      </nav>
    </>
  );
}
