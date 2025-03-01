import React from 'react'

import {nav,footer} from './Home.jsx';
import viedo from '../assets/viedo1.mp4'

export default function Aboutus() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section class="hero-section">
        <div class="hero-content">
          <div class="container py-0">
            <div class="hero-video-container">
            <video class="hero-video"  autoPlay loop muted >
              <source src={viedo} type="video/mp4"/>
              Your browser does not support the video tag.
            </video></div>
      
            <div class="row align-items-center g-5 py-5 ps-3">
              <div class="col-12 col-lg-8 text-center text-lg-start heading-text d-flex align-items-start">
                <h1 class="text-start" id="top-heading">
                Your Trusted Partner in Transformation, Guiding You Toward <span className='text-warning'>Success</span>
                </h1>
                <p class="text-start w-100" id="top-heading-para">
                  At Ameotech Informatics, we are your trusted partner in transformation, offering expert guidance to turn challenges into opportunities. We work closely with you to deliver tailored solutions that drive success and achieve your goals, every step of the way                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      
    </>
  )
}
