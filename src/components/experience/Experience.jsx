import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais são minhas skills</h5>
      <h2>Minhas Experiências</h2>
      <div className="container experience__container">
        <div className="experience__softskills">
          <h3>Desenvolvimento Front-end </h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>ReacJS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Svelte</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__hardskills">
          <h3>Desenvolvimento Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <div className='experience__details_icons' >
                <BsPatchCheckFill />
              </div>
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;


