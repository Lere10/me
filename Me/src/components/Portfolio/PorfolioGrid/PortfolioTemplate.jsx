import React, { useState } from "react";
import Popup from "../Popup/Popup.jsx";

export default function Template({ props }) {
  const [popup, setPopup] = useState(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <section className="portfolio__grid-box">
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={props.projectName}
          img={props.projectThumb}
          desc={props.descricao}
          link={props.pageLink}
        />
      )}
      {props.descricao ? (
        <>
          <img
            onClick={handleOpenPopup}
            className="portfolio__grid-box-img"
            src={props.projectThumb ? props.projectThumb : ""}
          />

          <p className="portfolio__grid-box-label">
            {props.projectName ? props.projectName : ""}
          </p>
        </>
      ) : (
        <>
          <a
            href={props.pageLink}
            target="_blank"
            className="portfolio__seeMore"
          >
            <img
              className="portfolio__grid-box-img"
              src={props.projectThumb ? props.projectThumb : ""}
            />

            <p className="portfolio__grid-box-label">
              {props.projectName ? props.projectName : ""}
            </p>
          </a>
        </>
      )}
    </section>
  );
}
