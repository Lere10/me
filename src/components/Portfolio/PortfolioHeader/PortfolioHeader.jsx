import React from "react";
import { useState } from "react";
import "../../../blocks/portfolio.css";

export default function PortfolioHeader(props) {
  const { desActive, devActive, setDevActive, setDesActive } = props;

  const activeHeaderClass = "portfolio__header_active";
  const offHeaderClass = "portfolio__header_off";

  async function handleClickDev() {
    setDevActive(true);
    setDesActive(false);
  }

  async function handleClickDes() {
    setDevActive(false);
    setDesActive(true);
  }

  return (
    <div className="portfolio__header">
      <div
        onClick={handleClickDev}
        className={`portfolio__header-dev ${
          devActive ? activeHeaderClass : offHeaderClass
        }`}
      >
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Desenvolvimento Web</h2>
      </div>
      <div
        onClick={handleClickDes}
        className={`portfolio__header-design ${
          desActive ? activeHeaderClass : offHeaderClass
        }`}
      >
        <p className="portfolio__pretitle">Portfólio</p>
        <h2 className="portfolio__title">Web Design</h2>
      </div>
    </div>
  );
}
