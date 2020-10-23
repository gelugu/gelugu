import React from "react";
import "./cv.css";

const CV = () => {
  return (
    <div className="container-cv">
      <div className="cv block block-l">
      <h1>Kraev Mikhail</h1>
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
          Занимаюсь программированием около 4-х лет, начинал с С/С++. Позже
          пробовал себя в Python, JavaScript (HTML+CSS), React (-native), Vue,
          Java, пентестинге. Есть опыт работы в микропроцессорном
          программировании, работал как с проектами Arduino, так и с
          микропроцессорами семейства STM32.
        </p>
        <p>
          За всё это время я твёрдо убедился, что люблю "Кодить". Везде. На
          всём. Всё. JS/React - одно из наиболее развивающихся направлений,
          почти всё, что я могу придумать - я могу реализовать на React. За это
          я люблю JS.
        </p>
        <p>
          Увлечён своим делом и постоянно учусь чему-то новому. Изучаю смежные
          со сферой разработки профессии, такие как дизайн, тестирование и т.д.,
          потому понимаю, как важно учитывать возможности других членов команды
          при написании кода.
        </p>
        <p>
          Несмотря на это, к сожалению, имею небольшой опыт работы в команде, в
          основном работал один. Общителен, проблем в коллективе никогда не
          было. Всегда с интересом разбирался в новых и сложных задачах, умею
          искать информацию как на русскоязычных, так и на англоязычных
          ресурсах. Техническую литературу воспринимаю отлично.
        </p>
      </div>

      <div className="education block block-m">
        <h2>Education</h2>
        <span>School - ВСОШ №1</span>
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
