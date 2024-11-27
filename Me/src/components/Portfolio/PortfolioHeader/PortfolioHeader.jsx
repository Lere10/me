import React from "react";
import { useState } from "react";
import "../../../blocks/portfolio.css";

export default function PortfolioHeader() {
  const [devActive, setDevActive] = useState();
  const [desActive, setDesActive] = useState();

  async function handleClick() {
    const activeHeaderClass = "portfolio__header_active";
    const devHeader = document.querySelector(".portfolio__header-dev");
    const desHeader = document.querySelector(".portfolio__header-design");

    devHeader.addEventListener("click", () => {
      devHeader.classList.add(activeHeaderClass);
      desHeader.classList.remove(activeHeaderClass);
      setDevActive(true);
      setDesActive(false);
    });
    desHeader.addEventListener("click", () => {
      desHeader.classList.add(activeHeaderClass);
      devHeader.classList.remove(activeHeaderClass);
      setDevActive(false);
      setDesActive(true);
    });
  }

  return (
    <div className="portfolio__header">
      <div
        onClick={handleClick}
        className="portfolio__header-dev portfolio__header_active"
      >
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Desenvolvimento Web</h2>
      </div>
      <div onClick={handleClick} className="portfolio__header-design">
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Web Design</h2>
      </div>
    </div>
  );
}
