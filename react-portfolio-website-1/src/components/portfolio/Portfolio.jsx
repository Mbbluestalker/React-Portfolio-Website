import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/dispatch.png";
import IMG2 from "../../assets/Kenince.png";
import IMG3 from "../../assets/githubfinder.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/africanproverb.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG5,
    title: "African Proverb - React / Next JS",
    github: "https://github.com/",
    demo: "http://africanproverbs.com/",
  },

  {
    id: 2,
    image: IMG1,
    title: "Dispatch Buddy WebApp- React/NodeJs",
    github: "https://github.com/Mbbluestalker",
    demo: "https://dispatch-buddy.netlify.app/",
  },

  {
    id: 3,
    image: IMG2,
    title: "Kenisce Group Web App- React/Django",
    github: "https://github.com/Mbbluestalker",
    demo: "https://kenisceroyal.netlify.app/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Github Finder - REACT and GitHub API",
    github: "https://github.com/Mbbluestalker",
    demo: "https://gitfinder-context.netlify.app/",
  },

  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Orion UI kit - Charts templates & infographics in Figma',
  //   github: 'https://github.com/',
  //   demo: 'https://dribbble.com/shots/18308150-Orion-UI-kit-Charts-templates-infographics-in-Figma?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share'
  // },

  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Orion UI kit - Charts templates & infographics in Figma',
  //   github: 'https://github.com/',
  //   demo: 'https://dribbble.com/shots/18308230-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share'
  // }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
