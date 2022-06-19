import React from 'react';
import './portfolio.css';
import aurem from '../../assets/aurem.png';
import meuCofrinho from '../../assets/meuCofrinho.png';
import genus from '../../assets/genus.png';
import myPortfolio from '../../assets/myportfolio.png';
import metaVerzel from '../../assets/meta-verzel.png';



function Projects(props) {
  return (
    <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={props.src} alt={props.alt} />
          </div>
          <h3>{props.nome}</h3>
          <p style={{fontSize: '1rem'}}>{props.description}</p>
          <div className='portfolio__item-cta'>
            {props.website && <a href={props.website} className='btn btn-primary' target='_blank' rel="noreferrer">Website</a>}
            {props.github && <a href={props.github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>}
            {props.dribbble && <a href={props.dribbble} className='btn btn-primary' target='_blank' rel="noreferrer">Dribbble</a>}
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
        nome='Aurem' 
        src={aurem}
        alt='Aurem'
        website='https://aurem.com.br/'
        description='Aurem é uma empresa de desenvolvimento 
        de software para inclusão de pessoas surdas e deficientes
        auditivas, por meio de legendagem em tempo real.'
      />
         <Projects 
        nome='Meu Cofrinho' 
        src={meuCofrinho}
        alt='Meu Cofrinho'
        website='https://stage.meucofrinho.com/'
        description='O Meu Cofrinho é uma plataforma de doações digitais. 
        Uma fintech de crowdfunding dedicada a conectar doadores e beneficiários 
        com causas em comum.'
      />
         <Projects 
        nome='Dashboard Genus' 
        src={genus} 
        alt='Dashboard Genus'
        website='https://genus.aurem.com.br/'
        description='Genus a plataforma de legendagem 
        em tempo real da empresa Aurem, com a possibilidade de 
        criar salas, apresentações de slide e conversas por chat.'
      />
         <Projects 
        nome='Meu Portfólio'
        src={myPortfolio}
        alt='Meu Portfólio' 
        github='https://github.com/bruno-candia/alan-turing-portfolio' 
        description='Meu Portfólio é um site desenvolvido com o objetivo
        de apresentar minhas habilidades e experiências. Além de mostrar
        meu perfil, meu trabalho e meus contatos.'
      />
      <Projects 
        nome='Meta Verzel'
        src={metaVerzel}
        alt='Meta Verzel'
        dribbble='https://dribbble.com/shots/18528719-Meta-Verzel'
        description='Meta Verzel é um site da empresa Verzel, 
        com foco no desenvolvimento de tecnologias Blockchain 
        para empresas que desejam atuar na área dessa tecnologia.'
      />
      
      </div>
    </section>
  )
}

export default Portfolio;