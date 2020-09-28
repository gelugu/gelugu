import React from "react";

import Card from "./components/Card"
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <Card
        title="ToDo app"
        text="Personal task planner. I felt the need to implement it when I tried many similar programs. Something was more suitable, something had no competitive advantages at all. But still, the perfect solution was not found, and I wrote it for myself."
        lang="React Native"
        links={{
          github: "https://github.com/gelugu/react-native-todo",
          expo: "https://expo.io/@gelugu/rn-gelugu-todo/"
        }}
      />
    </div>
  );
};

export default Projects;
