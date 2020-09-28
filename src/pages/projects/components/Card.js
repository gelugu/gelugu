import React from "react";

import "./card.css";

const Card = ({ title, text, lang, links }) => {
  const refs = [];
  for (let link in links) {
    refs.push(
      <a href={links[link]} className={`card-link ${link}`}>
        {link}
      </a>
    );
  }

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <div className="card-footer">
        <div className="card-links">
        {refs}
        </div>
        <span className={`card-lang ${lang.toLowerCase()}`}>{lang}</span>
      </div>
    </div>
  );
};

export default Card;
