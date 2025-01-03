import React, { useState } from "react";
import PortfolioHeader from "./PortfolioHeader/PortfolioHeader.jsx";
import Template from "./PorfolioGrid/PortfolioTemplate.jsx";
import USAroundThumb from "../../images/Project__aroundThumb.jpeg";
import SollerThumb from "../../images/Project__SollerThumb.jpeg";
import LaVidaThumb from "../../images/Project__LavidaThumb.jpg";
import HomelandThumb from "../../images/Project__homelandThumb.jpg";
import CafeTripleTenThumb from "../../images/Project__CoffeThumb.png";
import GreenThumb from "../../images/greenRect.png";

import OdetteThumb from "../../images/Project__OdetteThumb.jpg";
import mtThumb from "../../images/Project__mtThumb.jpg";
import philipeThumb from "../../images/Project__philipeThumb.jpg";
import afeetoThumb from "../../images/Project__afeetoThumb.png";
import mobillsThumb from "../../images/Project__mobillsThumb.jpg";

export default function Portfolio(props) {
  // const { handleClosePopup, handleOpenPopup } = props;
  const [devActive, setDevActive] = useState(true);
  const [desActive, setDesActive] = useState(false);

  const devProjects = [
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

  const desProjects = [
    {
      projectName: "Afeeto",
      descricao: "Projeto aplicação web & LP",
      link: "https://www.behance.net/gallery/215918561/Afeeto",
      pageLink: "https://www.behance.net/gallery/215918561/Afeeto",
      projectThumb: afeetoThumb,
    },
    {
      projectName: "Odette",
      descricao: "Projeto de Landing Page para loja de artigos de mergulho",
      link: "https://www.behance.net/gallery/129331981/Landing-Page-Odette",
      pageLink: "https://www.behance.net/gallery/129331981/Landing-Page-Odette",
      projectThumb: OdetteThumb,
    },
    {
      projectName: "Meu Tudo & Felipe Brito",
      descricao: "Landing Page e campanha de marketing",
      link: "https://www.behance.net/gallery/129323249/Landing-Page-Campanha-Felipe-Brito",
      pageLink:
        "https://www.behance.net/gallery/129323249/Landing-Page-Campanha-Felipe-Brito",
      projectThumb: philipeThumb,
    },
    {
      projectName: "Meu Tudo campanha",
      descricao: "Teste de design e aplicações com a meu tudo",
      link: "https://www.behance.net/gallery/109851885/Desafio-Meu-Tudo",
      pageLink: "https://www.behance.net/gallery/109851885/Desafio-Meu-Tudo",
      projectThumb: mtThumb,
    },
    {
      projectName: "Mobills Mirim",
      descricao: "UX/UI Design para aplicativo de controle financeiro",
      link: "https://www.behance.net/gallery/108977521/Desafio-Mobills",
      pageLink: "https://www.behance.net/gallery/108977521/Desafio-Mobills",
      projectThumb: mobillsThumb,
    },
    {
      projectName: "Ver mais",
      descricao: null,
      link: "",
      pageLink: "https://www.behance.net/lucasbanko6416",
      projectThumb: GreenThumb,
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <PortfolioHeader
        devActive={devActive}
        setDevActive={setDevActive}
        desActive={desActive}
        setDesActive={setDesActive}
      />
      <div className="portfolio__grid">
        {devActive
          ? devProjects.map((project, index) => {
              return <Template key={index} props={project} />;
            })
          : desProjects.map((project, index) => {
              return <Template key={index} props={project} />;
            })}
      </div>
    </section>
  );
}
