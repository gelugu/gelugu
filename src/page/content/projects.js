import React from "react";
import './projects.css'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="card-title">{this.props.title}</h2>
        <p className="card-text">{this.props.text}</p>
        <h3 className={"card-lang " + this.props.lang.toLowerCase()}>{this.props.lang}</h3>
        <div className="card-footer">
          <button className="card-button">Open modal</button>
          <a className="card-link" href={this.props.href}>github</a>
        </div>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Card title="ToDo List" text="React ToDo app" lang="React" href="#"/>
      </div>
    );
  }
}

export default Projects;
