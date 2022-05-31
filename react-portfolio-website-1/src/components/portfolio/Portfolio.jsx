import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308150-Orion-UI-kit-Charts-templates-infographics-in-Figma?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308230-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308150-Orion-UI-kit-Charts-templates-infographics-in-Figma?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308230-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308150-Orion-UI-kit-Charts-templates-infographics-in-Figma?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Orion%20UI%20kit%20-%20Charts%20templates%20%26%20infographics%20in%20Figma&utm_medium=Social_Share'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18308230-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps?utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Alien_pixels&utm_content=Eclipse%20-%20Figma%20dashboard%20UI%20kit%20for%20data%20design%20web%20apps&utm_medium=Social_Share'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>
                </article>
            )
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio