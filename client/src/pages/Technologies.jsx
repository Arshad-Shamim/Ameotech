import React from 'react'

import {nav,core_tech,footer} from './Home.jsx';
import './technologies.css'
import Tech from '../assets/core_technologies.webp'

export default function Technologies() {
  return (
    <>
        <header>
            {nav()}
        </header>

        <section>
          <div className='container-fluid col-12 border d-flex' id="core-technologies">
              <div className='col-lg-6 col-10 mx-auto my-auto'>
                <h1 className='text-white fs-1 fw-bold text-uppercase'>Our Core <span className='text-warning'>Technologies</span></h1>
                <p className='text-white fs-5 d-inline'>Discover the cutting-edge technologies at the heart of our solutions. </p>
                <p  className='text-white fs-5 d-inline'>From advanced AI to scalable cloud infrastructures, we leverage a robust tech stack designed to transform and elevate your business processes.</p>
              </div>  
          </div>
        </section>

        <section>
          {core_tech()}
        </section>

        <section>
          {footer()}
        </section>
    </>
  )
}
