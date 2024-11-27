import React from "react";
// import Popup from "../Popup/Popup.jsx";

export default function Template({ props }) {
  return (
    <section className="portfolio__grid-box">
      <img
        className="portfolio__grid-box-img"
        src={props.projectThumb ? props.projectThumb : ""}
      />
      <p className="portfolio__grid-box-label">
        {props.projectName ? props.projectName : ""}
      </p>
    </section>
  );
}
