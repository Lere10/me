import React from "react";
import PortfolioHeader from "./PortfolioHeader/PortfolioHeader.jsx";
import Template from "./PorfolioGrid/PortfolioTemplate.jsx";
import USAroundThumb from "../../images/Project__aroundThumb.jpeg";
import SollerThumb from "../../images/Project__SollerThumb.jpeg";

export default function Portfolio() {
  const projects = [
    {
      projectName: "US Around",
      link: "https://github.com/Lere10/web_project_around",
      pageLink: "https://lere10.github.io/web_project_around/",
      projectThumb: USAroundThumb,
    },
    {
      projectName: "Soller",
      link: "https://github.com/Lere10/Buzzvel-Fest-Test",
      pageLink: "https://lere10.github.io/Buzzvel-Fest-Test/",
      projectThumb: SollerThumb,
    },
    {
      projectName: "Soller",
      link: "https://github.com/Lere10/Buzzvel-Fest-Test",
      pageLink: "https://lere10.github.io/Buzzvel-Fest-Test/",
      projectThumb: SollerThumb,
    },
  ];

  return (
    <section className="portfolio">
      <PortfolioHeader />
      <div className="portfolio__grid">
        {projects.map((project, index) => {
          return <Template key={index} props={project} />;
        })}
      </div>
    </section>
  );
}
