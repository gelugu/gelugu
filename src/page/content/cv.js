import React from "react";
import "./cv.css";

class CV extends React.Component {
  render() {
    return (
      <div className="cv">
        <h1>Kraev Mikhail &#123;</h1>

        <div className="cv-quick-info">
          <span className="cv-qi-spec">
            // JS Engineer - React, React Native, Vue
          </span>
          <span className="cv-qi-mail">
            // <a href="#">kraev.mixail@gmail.com</a>
          </span>
          <span className="cv-qi-phone">// +7 905 280 22 88</span>
        </div>

        <div className="about-me">
          <h2>About me &#123;</h2>
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
            почти всё, что я могу придумать - я могу реализовать на React. За
            это я люблю JS.
          </p>
          <p>
            Увлечён своим делом и постоянно учусь чему-то новому. Изучаю смежные
            со сферой разработки профессии, такие как дизайн, тестирование и
            т.д., потому понимаю, как важно учитывать возможности других членов
            команды при написании кода.
          </p>
          <p>
            Несмотря на это, к сожалению, имею небольшой опыт работы в команде,
            в основном работал один. Общителен, проблем в коллективе никогда не
            было. Всегда с интересом разбирался в новых и сложных задачах, умею
            искать информацию как на русскоязычных, так и на англоязычных
            ресурсах. Техническую литературу воспринимаю отлично.
          </p>
          <h2>&#125;</h2>
        </div>

        <div className="education">
          <h2>Education &#123;</h2>
          <span>School - ВСОШ №1</span>
          <span>University - ETU “LETI” (undergraduate)</span>
          <h2>&#125;</h2>
        </div>

        <div className="work-experience">
          <h2>Work experience &#123;</h2>
          <ul>
            <li>
              <div className="we-job">
                <h3>Smart3d (2017 October - 2018 Jule) &#123;</h3>
                <span>technical engineer</span>
                <h3>&#125;</h3>
              </div>
            </li>
            <li>
              <div className="we-job">
                <h3>ANT Company (2018 December - 2019 Jule) &#123;</h3>
                <span>programmer engineer</span>
                <h3>&#125;</h3>
              </div>
            </li>
          </ul>
        </div>

        <div className="additional-skills">
          <h2>Additional skills &#123;</h2>
          <ul>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>Linux</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Adobe (PS, Il, AE)</li>
          </ul>
          <h2>&#125;</h2>
        </div>

        <h1>&#125;;</h1>
      </div>
    );
  }
}

export default CV;
