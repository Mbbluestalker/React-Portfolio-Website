import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>the Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
              
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
                
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>TAILWIND CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>DJANGO</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>POSTGRESQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>DJANGO REST FRAMEWORK</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience