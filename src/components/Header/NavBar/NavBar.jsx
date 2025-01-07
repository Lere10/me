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
            <li>
              <a className="navbar__link" href="#about">
                Sobre mim
              </a>
            </li>
            <li>
              <a className="navbar__link" href="#portfolio">
                Porfólios
              </a>
            </li>
            <li>
              <a className="navbar__link" href="#skills">
                Ferramentas
              </a>
            </li>
            <li>
              <a className="navbar__link" href="#contact">
                Contatos
              </a>
            </li>
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
