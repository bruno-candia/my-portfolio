import React from 'react';
import './portfolio.css';


function Projects(props) {
  return (
    <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={props.src} alt={props.alt} />
          </div>
          <h3>{props.nome}</h3>
          <div className='portfolio__item-cta'>
            <a href={props.github} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={props.dribbbe} className='btn btn-primary' target='_blank' rel="noreferrer">Dribble</a>
          </div>
      </article>
  )
}


const Portfolio = () => {
  return(
    <section id='portfolio'>
      <h5>Meu trabalhos recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
      <Projects 
        nome='MizeraviTV' 
        src='https://i.pinimg.com/originals/0c/ac/97/0cac97f31c9019185384dc92b0bdaa84.jpg' 
        alt='Máquina Enigma'
        github='#' 
        dribbble='#'
      />
         <Projects 
        nome='BrianBonitao' 
        src='https://i.pinimg.com/originals/0c/ac/97/0cac97f31c9019185384dc92b0bdaa84.jpg' 
        alt='Máquina Enigma'
        github='#' 
        dribbble='#'
      />
         <Projects 
        nome='devaugustokayo' 
        src='https://i.pinimg.com/originals/0c/ac/97/0cac97f31c9019185384dc92b0bdaa84.jpg' 
        alt='Máquina Enigma'
        github='#' 
        dribbble='#'
      />
         <Projects 
        nome='caytonzz' 
        src='https://i.pinimg.com/originals/0c/ac/97/0cac97f31c9019185384dc92b0bdaa84.jpg' 
        alt='Máquina Enigma'
        github='#' 
        dribbble='#'
      />
      </div>
    </section>
  )
}

export default Portfolio;