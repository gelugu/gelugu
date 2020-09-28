import React, { useState } from "react";
import "./projects.css";

const Card = ({ title, text, lang, href, modal }) => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <h3 className={`card-lang ${lang.toLowerCase()}`}>{lang}</h3>
      <div className="card-footer">
        {modal ? (
          <button onClick={setVisible.bind(null, true)} className="card-button">
            Open modal
          </button>
        ) : null}
        {href ? (
          <a href={href} className="card-link">
            github
          </a>
        ) : null}
      </div>
    </div>
  );
};

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Card
          title="ToDo app"
          text="React app for capture and schedule tasks as soon as you think about them."
          lang="React Native"
          href={"https://expo.io/@gelugu/rn-gelugu-todo/"}
        />
      </div>
    );
  }
}

export default Projects;
