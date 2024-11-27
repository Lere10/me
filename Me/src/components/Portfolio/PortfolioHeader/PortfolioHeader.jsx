import React from "react";
import { useState } from "react";
import "../../../blocks/portfolio.css";

export default function PortfolioHeader() {
  const [devActive, setDevActive] = useState();
  const [desActive, setDesActive] = useState();

  const activeHeaderClass = "portfolio__header_active";
  const offHeaderClass = "portfolio__header_off";

  async function handleClickDev() {
    const devHeader = document.querySelector(".portfolio__header-dev");
    const desHeader = document.querySelector(".portfolio__header-design");
    devHeader.classList.add(activeHeaderClass);
    devHeader.classList.remove(offHeaderClass);
    desHeader.classList.remove(activeHeaderClass);
    desHeader.classList.add(offHeaderClass);
    setDevActive(true);
    setDesActive(false);
  }

  async function handleClickDes() {
    const devHeader = document.querySelector(".portfolio__header-dev");
    const desHeader = document.querySelector(".portfolio__header-design");
    desHeader.classList.add(activeHeaderClass);
    desHeader.classList.remove(offHeaderClass);
    devHeader.classList.remove(activeHeaderClass);
    devHeader.classList.add(offHeaderClass);
    setDevActive(false);
    setDesActive(true);
  }

  return (
    <div className="portfolio__header">
      <div
        onClick={handleClickDev}
        className="portfolio__header-dev portfolio__header_active"
      >
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Desenvolvimento Web</h2>
      </div>
      <div
        onClick={handleClickDes}
        className="portfolio__header-design portfolio__header_off"
      >
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Web Design</h2>
      </div>
    </div>
  );
}
