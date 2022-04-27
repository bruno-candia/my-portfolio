import React from 'react';
import './testimonials.css';


function Clients(props) {
  return (
    <article className="testimonial">
      {/* avatar */}
      <img src={props.src} alt="avatar" className="testimonial__avatar" />
      <h5 className="client__name">{props.name}</h5>
      <small className="client__review">
        {props.text}
      </small>
    </article>
  )
}

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review dos clientes</h5>
      <h2>Depoimentos</h2>
      <div className="container testimonials__container">
        <Clients
          name='BrianBonitao'
          src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Mollitia dolorem alias, aut quia laudantium laboriosam accusantium ut rerum,
            Enim ducimus praesentium rem voluptatibus numquam autem alias saepe, perspiciatis amet accusantium.'/>

      </div>
    </section>
  )
}

export default Testimonials;