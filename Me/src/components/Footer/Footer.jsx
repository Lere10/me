import React from "react";
import rect from "../../images/footer__rect.png";
import phoneIcon from "../../images/footer__phone-img.png";
import emailIcon from "../../images/footer__email-img.png";
import gitHubIcon from "../../images/footer__github.png";
import linkedinIcon from "../../images/footer__linkedin.png";
import behanceIcon from "../../images/footer__be.png";

export default function Footer() {
  const phoneNumber = "+55 (85) 99767-5292";
  return (
    <section className="footer">
      <h3 className="footer__title">Contatos</h3>
      <div className="footer__content">
        <div className="footer__content-contact">
          <div className="footer__content-contact-phone">
            <img
              className="footer__content-contact-phone-img"
              src={phoneIcon}
              alt="Phone Icon"
            />
            <p className="footer__content-contact-phone-text">{phoneNumber}</p>
          </div>
          <div className="footer__content-contact-email">
            <img
              className="footer__content-contact-email-img"
              alt="Email Icon"
              src={emailIcon}
            />
            <p className="footer__content-contact-email-text">
              Leredsb10@gmail.com
            </p>
          </div>
        </div>
        <img className="footer__rect" src={rect} />
        <ul className="footer__content-socials">
          <li
            target="_blank"
            href="https://www.linkedin.com/in/lucas-iere-a197a5154/"
          >
            <img
              className="footer__content-social-linkedin"
              alt="Linkedin Icon"
              src={linkedinIcon}
            />
          </li>
          <li target="_blank" href="https://github.com/Lere10">
            <img
              className="footer__content-social-github"
              alt="Github Icon"
              src={gitHubIcon}
            />
          </li>
          <li target="_blank" href="https://www.behance.net/lucasbanko6416">
            <img
              className="footer__content-social-behance"
              alt="Behance Icon"
              src={behanceIcon}
            />
          </li>
        </ul>
      </div>
      <div className="footer__foot">
        <p className="footer__foot-text">By Lere</p>
      </div>
    </section>
  );
}
