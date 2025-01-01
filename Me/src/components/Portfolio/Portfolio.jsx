import React from "react";
import PortfolioHeader from "./PortfolioHeader/PortfolioHeader.jsx";
import Template from "./PorfolioGrid/PortfolioTemplate.jsx";
import USAroundThumb from "../../images/Project__aroundThumb.jpeg";
import SollerThumb from "../../images/Project__SollerThumb.jpeg";
import LaVidaThumb from "../../images/Project__LavidaThumb.jpg";
import HomelandThumb from "../../images/Project__homelandThumb.jpg";
import CafeTripleTenThumb from "../../images/Project__CoffeThumb.png";
import GreenThumb from "../../images/greenRect.png";

export default function Portfolio(props) {
  const { handleClosePopup, handleOpenPopup } = props;

  const projects = [
    {
      projectName: "US Around",
      descricao: "Feito com React, Hooks, Node e Express",
      link: "https://github.com/Lere10/web_project_around",
      pageLink: "https://lere10.github.io/web_project_around/",
      projectThumb: USAroundThumb,
    },
    {
      projectName: "Soller",
      descricao: "Feito com HTML, CSS libraries e JS",
      link: "https://github.com/Lere10/Buzzvel-Fest-Test",
      pageLink: "https://lere10.github.io/Buzzvel-Fest-Test/",
      projectThumb: SollerThumb,
    },
    {
      projectName: "La Vida",
      descricao: "Feito com HTML/CSS Vanilla",
      link: "https://github.com/Lere10/LaVida",
      pageLink: "https://lere10.github.io/LaVida/",
      projectThumb: LaVidaThumb,
    },
    {
      projectName: "Homeland",
      descricao: "Projeto com foco em Flexbox e Grid",
      link: "https://github.com/Lere10/web_project_homeland",
      pageLink: "https://lere10.github.io/web_project_homeland/",
      projectThumb: HomelandThumb,
    },
    {
      projectName: "Biblioteca TripleTen",
      descricao: "HTML e CSS Vanilla",
      link: "https://github.com/Lere10/web_project_library",
      pageLink: "https://lere10.github.io/web_project_library/",
      projectThumb: CafeTripleTenThumb,
    },
    {
      projectName: "Ver mais",
      descricao: null,
      link: "",
      pageLink: "https://github.com/Lere10",
      projectThumb: GreenThumb,
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
