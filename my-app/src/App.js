import React from 'react';
import  './App.css';
import Helmet from 'react-helmet';

import img1 from './images/avatars/user-06.jpg'
import img2 from './images/avatars/user-02.jpg'
import img3 from './images/avatars/user-03.jpg'
import img4 from './images/avatars/user-04.jpg'
import img5 from './images/avatars/user-05.jpg'

import scrp1 from './JS/main'
import scrp2 from './JS/plugins'

function App() {
  return (
    <div>
    <div id="top" className="ss-preload" className="body">
      <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
            </ul>
          </nav>
        </div> 
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      </header> 
      <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed={-7} />
        <div className="row s-hero__content">
          <div className="column">
            <div className="s-hero__content-about">
              <h1>I'm Jonathan Doe.</h1>
              <h3>
                I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.
              </h3>
              <div className="s-hero__content-social">
                <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true" /></a>
                <a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a>
                <a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a>
                <a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a>
                <a href="#0"><i className="fab fa-behance" aria-hidden="true" /></a>
                <a href="#0"><i className="fab fa-linkedin" aria-hidden="true" /></a>
              </div>
            </div> 
          </div>
        </div> 
        <div className="s-hero__scroll">
          <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span className="scroll-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
            </span>
            <span className="scroll-text">Scroll Down</span>
          </a>
        </div> 
      </section> 
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={img1} alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore 
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
              nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Jonathan Doe <br /><br />
                  1600 Amphitheatre Parkway <br /><br />
                  Mountain View, CA 94043 US <br /><br />
                  <a href="tel:+1975432345">+197 543 2345</a> <br /><br />
                  <a href="mailto:#0">sayhello@ceevee.com</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div> 
      </section> 
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Career</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Dropbox</h4>
                <p className="resume-block__header-meta">
                  <span>Product Designer</span> 
                  <span className="resume-block__header-date">
                    August 2019 - Present
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> 
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Facebook</h4>
                <p className="resume-block__header-meta">
                  <span>UI/UX Designer</span> 
                  <span className="resume-block__header-date">
                    August 2016 - July 2019
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> 
          </div>
        </div> 
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">University of Life</h4>
                <p className="resume-block__header-meta">
                  <span>Master in Graphic Design</span> 
                  <span className="resume-block__header-date">
                    April 2015
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> 
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">School of Cool Designers</h4>
                <p className="resume-block__header-meta">
                  <span>B.A. Degree in Graphic Design</span> 
                  <span className="resume-block__header-date">
                    August 2012
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> 
          </div>
        </div> 
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
              <ul className="skill-bars-fat">
                <li>
                  <div className="progress percent85" />
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent65" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent90" />
                  <strong>Figma</strong>
                </li>
                <li>
                  <div className="progress percent75" />
                  <strong>Illustrator</strong>
                </li>
                <li>
                  <div className="progress percent60" />
                  <strong>Photoshop</strong>
                </li>
              </ul>
            </div> 
          </div>
        </div>
      </section> 
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>A Few Of My Latest Creations</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
          <div className="column folio-item">
            <a href="#modal-01" className="folio-item__thumb">
              <img src="images/portfolio/droplet.jpg" srcSet="images/portfolio/droplet.jpg 1x, 
                             images/portfolio/droplet@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-02" className="folio-item__thumb">
              <img src="images/portfolio/lamp.jpg" srcSet="images/portfolio/lamp.jpg 1x, 
                             images/portfolio/lamp@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-03" className="folio-item__thumb">
              <img src="images/portfolio/minimalismo.jpg" srcSet="images/portfolio/minimalismo.jpg 1x, 
                             images/portfolio/minimalismo@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-04" className="folio-item__thumb">
              <img src="images/portfolio/shutterbug.jpg" srcSet="images/portfolio/shutterbug.jpg 1x, 
                             images/portfolio/shutterbug@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-05" className="folio-item__thumb">
              <img src="images/portfolio/fuji.jpg" srcSet="images/portfolio/fuji.jpg 1x, 
                             images/portfolio/fuji@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-06" className="folio-item__thumb">
              <img src="images/portfolio/skaterboy.jpg" srcSet="images/portfolio/skaterboy.jpg 1x, 
                             images/portfolio/skaterboy@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-07" className="folio-item__thumb">
              <img src="images/portfolio/rucksack.jpg" srcSet="images/portfolio/rucksack.jpg 1x, 
                             images/portfolio/rucksack@2x.jpg 2x" alt="" />
            </a>
          </div> 
          <div className="column folio-item">
            <a href="#modal-08" className="folio-item__thumb">
              <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="" />
            </a>
          </div> 
        </div> 
        <div id="modal-01" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Droplet</h5>
              <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div> 
        <div id="modal-02" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>The Lamp</h5>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-03" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Minimalismo</h5>
              <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
              <ul className="modal-popup__cat">
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-04" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-shutterbug.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Shutterbug</h5>
              <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
              <ul className="modal-popup__cat">
                <li>E-Commerce</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-05" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Fuji</h5>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <ul className="modal-popup__cat">
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-06" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Skaterboy</h5>
              <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-07" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Rucksack</h5>
              <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
        <div id="modal-08" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Sand Dunes</h5>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <ul className="modal-popup__cat">
                <li>Web Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
          </div>
        </div>  
      </section> 
      <section className="s-cta">
        <div className="row">
          <div className="column">
            <h3 className="h2 section-desc">
              Need a great reliable web hosting?
            </h3>
          </div>
        </div> 
        <div className="row cta-content">
          <div className="column">
            <p>
              We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
              Powerful web and Wordpress hosting. Guaranteed.
              Starting at $2.95 per month.
            </p>
            <a href="https://www.dreamhost.com/r.cgi?287326" className="btn btn--primary h-full-width">Get Started</a>
          </div>
        </div> 
      </section> 
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
      <section id="contact" className="s-contact target-section">
        <div className="row s-contact__header">
          <div className="column large-12">
            <h3 className="section-header-allcaps">Say Hello</h3>
          </div>
        </div>
        <div className="row s-contact__content">
          <div className="column large-7 medium-12">
            <h4 className="huge-text">
              Have a new project in mind? Let's collaborate and build something awesome. 
              Let's turn that idea to an even greater product :
            </h4>
          </div>
          <div className="column large-4 medium-12">
            <div className="row contact-infos">
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">
                    Email
                  </h5>
                  <p className="contact-block__content">
                    <a className="mailtoui" href="mailto:sayhello@ceevee.com">sayhello@ceevee.com</a>
                  </p>
                </div> 
              </div>
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">
                    Phone
                  </h5>
                  <p className="contact-block__content">
                    <a href="tel:+1975432345">+197 543 2345</a>
                  </p>
                </div> 
              </div>
              <div className="column large-12">
                <a href="mailto:sayhello@ceevee.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
              </div>
            </div> 
          </div>
        </div> 
      </section> 
      <footer className="s-footer">
        <div className="row">
          <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
            <ul className="s-footer__social">
              <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
              <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
              <li><a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a></li>
              <li><a href="#0"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="column large-7 medium-6 w-1000-stack ss-copyright">
            <span>© Copyright Ceevee 2021</span> 
            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
          </div>
        </div>
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" /></svg>
          </a>
        </div> 
      </footer>


    </div>
  </div>
  );
}

export default App;
