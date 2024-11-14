import React from "react";
import "../../../blocks/portfolio.css";

export default function PortfolioHeader() {
  return (
    <div className="porfolio__header">
      <div className="portfolio__header-dev">
        <p>Portfólio</p>
        <h2>Desenvolvimento Web</h2>
      </div>
      <div className="portfolio__header-design">
        <p>Portfólio</p>
        <h2>Web Design</h2>
      </div>
    </div>
  );
}
