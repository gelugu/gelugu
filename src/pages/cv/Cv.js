import React from "react";
import "./cv.css";

const CV = () => {
  return (
    <div className="container-cv">
      <div className="cv block block-l">
        <span className="cv-quick-info">JS Engineer</span>
        <span className="cv-quick-info">
          <a href="mailto:kraev.mixail@gmail.com">kraev.mixail@gmail.com</a>
        </span>
        <span className="cv-quick-info">
          <a href="tel:+7-905-280-22-88">+7 905 280 22 88</a>
        </span>

        <div className="about-me block block-m">
          <h2>About me</h2>
          <p>
            I've been programming for about 4 years, I started with C / C ++.
            Later I tried myself in Python, JavaScript (HTML + CSS), React
            (-native), Vue, Java, pentesting. I have experience in
            microprocessor programming, worked with Arduino and STM32.
          </p>
          <p>
            During all this time, I was firmly convinced that I love to code.
            Everywhere. On everything. All. JS / React is one of the fastest
            growing route. Everything I can think of - I can implement in React.
            That's why I love JS.
          </p>
          <p>
            I am realy passionate about my work and I am constantly learning
            something new. I study related to the field of development
            professions, such as design, testing, etc., therefore I understand
            how important it is to consider the capabilities of other team
            members when writing code and can see my code from other angles.
          </p>
          <p>
            Despite this, unfortunately, I have little experience working in a
            team, mostly I worked alone. I have always understood new and
            complex tasks with interest, I can search for information both in
            Russian and in English resources. Also I perceive technical
            literature very well.
          </p>
        </div>

        <div className="education block block-m">
          <h2>Education</h2>
          <span>School - "ВСОШ №1"</span>
          <span>University - ETU “LETI” (undergraduate)</span>
        </div>

        <div className="work-experience block block-m">
          <h2>Work experience</h2>
          <div className="we-job block block-s">
            <h3>Smart3d (2017 October - 2018 Jule) </h3>
            <span>technical engineer</span>
          </div>
          <div className="we-job block block-s">
            <h3>ANT Company (2018 December - 2019 Jule) </h3>
            <span>robotics programmer engineer</span>
          </div>
          <div className="we-job block block-s">
            <h3>VTB Group (2020 September - Now) </h3>
            <span>devops engineer</span>
          </div>
        </div>

        <div className="additional-skills block block-m">
          <h2>Additional skills</h2>
          <span>JavaScript</span>
          <span>React</span>
          <span>React Native</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>Linux</span>
          <span>React</span>
          <span>Vue.js</span>
          <span>Adobe (PS, Il, AE)</span>
        </div>
      </div>
    </div>
  );
};

export default CV;
