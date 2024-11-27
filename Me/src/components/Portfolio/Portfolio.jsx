import React from "react";
import PortfolioHeader from "./PortfolioHeader/PortfolioHeader.jsx";
import Template from "./PorfolioGrid/PortfolioTemplate.jsx";
import USAroundThumb from "../../images/Project__aroundThumb.jpeg";
import SollerThumb from "../../images/Project__SollerThumb.jpeg";
import LaVidaThumb from "../../images/Project__LavidaThumb.jpg";
import HomelandThumb from "../../images/Project__homelandThumb.jpg";
import CafeTripleTenThumb from "../../images/Project__CoffeThumb.png";

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
      projectName: "La Vida",
      link: "https://github.com/Lere10/LaVida",
      pageLink: "https://lere10.github.io/LaVida/",
      projectThumb: LaVidaThumb,
    },
    {
      projectName: "Homeland",
      link: "https://github.com/Lere10/web_project_homeland",
      pageLink: "https://lere10.github.io/web_project_homeland/",
      projectThumb: HomelandThumb,
    },
    {
      projectName: "Biblioteca TripleTen",
      link: "https://github.com/Lere10/web_project_library",
      pageLink: "https://lere10.github.io/web_project_library/",
      projectThumb: CafeTripleTenThumb,
    },
    {
      projectName: "Ver mais",
      link: "",
      pageLink: "",
      projectThumb: "",
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
