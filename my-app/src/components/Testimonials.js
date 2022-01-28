import React from 'react';

import img2 from '../images/avatars/user-02.jpg'
import img3 from '../images/avatars/user-03.jpg'
import img4 from '../images/avatars/user-04.jpg'
import img5 from '../images/avatars/user-05.jpg'

function Testimonials()
{
    return(

        <section id="testimonials" className="s-testimonials target-section">
        <div className="s-testimonials__bg" />
        <div className="row s-testimonials__header">
          <div className="column large-12">
            <h3>Hear What My Clients Says</h3>
          </div>
        </div>
        <div className="row s-testimonials__content">
          <div className="column">
            <div className="swiper-container testimonial-slider">
              <div className="swiper-wrapper">
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src={img2} alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>The Rosero</strong>
                      <span>CEO, Apple</span>
                    </cite>
                  </div>
                  <p>
                    Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                    Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                    Laudantium quia consequatur molestias delectus culpa.
                  </p>
                </div> 
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src={img3} alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>Ismael Cedillo</strong>
                      <span>CEO, Google</span>
                    </cite>
                  </div>
                  <p>
                    Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                    Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                    Quasi voluptas eius distinctio. Atque eos maxime.
                  </p>
                </div>
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src={img4} alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>Marco Iza</strong>
                      <span>CEO, Microsoft</span>
                    </cite>
                  </div>
                  <p>
                    Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                    Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                    Voluptatem dignissimos ut.
                  </p>
                </div> 
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src={img5} alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>Kevin Chuquimarca</strong>
                      <span>CEO, Amazon</span>
                    </cite>
                  </div>
                  <p>
                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                    quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                    Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  </p>
                </div> 
              </div> 
              <div className="swiper-pagination" />
            </div> 
          </div> 
        </div> 
      </section>         

    );
}

export default Testimonials;