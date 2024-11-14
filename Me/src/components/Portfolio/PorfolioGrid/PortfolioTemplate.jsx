import React from "react";
// import Popup from "../Popup/Popup.jsx";

export default function Template({ props }) {
  return (
    <section className="portfolio__grid-box">
      {console.log(props)}
      <img
        className="porfolio__grid-box-img"
        src={props.projectThumb ? props.projectThumb : ""}
      />
      <p className="portfolio__grid-box-label">
        {props.projectName ? props.projectName : ""}
      </p>
    </section>
  );
}
