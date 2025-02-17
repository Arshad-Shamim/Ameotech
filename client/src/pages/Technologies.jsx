import React from 'react'

import {nav,core_tech,footer} from './Home.jsx';
import '../cascading/Technologies.css'

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
                <p className='text-white fs-5 d-inline'>Explore the latest innovations powering our solutions. </p>
                <p  className='text-white fs-5 d-inline'> From sophisticated AI to scalable cloud frameworks, we utilize a dynamic technology stack crafted to enhance and revolutionize your business operations.</p>
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
