import React from 'react'

import {nav,footer} from "../Home.jsx"
import "../../cascading/services.css"

export default function MobileDev() {
  return (
    <>
        <section>
            {nav()}
        </section>

        <section id="section1" className='container-fluid row py-4'>
            <div className='col-md-7 col-12 d-flex'>
                <div className='mx-auto my-auto col-md-8 col-10'>
                    <h1>Custom Mobile App Solutions to Elevate Your Brand</h1>
                    <p>Ameotech Informatics develops custom iOS and Android apps tailored to your business goals. We deliver scalable, user-focused solutions for customer engagement, e-commerce, and enterprise needs, ensuring high performance and growth. </p>
                </div>
            </div>

            <div className='col-md-5 col-12 d-flex'>
                <div className='mx-auto my-auto col-6'>
                    <img src="https://www.ameotech.com/images/mobile-app-ameotech.png" alt="" className='img-fluid'/>
                </div>
            </div>
        </section>


        <section class="tech-area common-padding">
            <div class="container">
                <div class="row py-3 py-md-0  d-flex align-items-center justify-content-center">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src="https://www.ameotech.com/images/woman-standing%202.png" loading="lazy" alt="woman-web-dev" class="img-fluid left-section"/>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 tech-text" id="right-tech-web">
                        <h1 id="use-tech">Technologies We Use to Build Powerful Web Solutions</h1>
                        <img src="https://www.ameotech.com/images/tech-images-all.svg" loading="lazy" alt="web-development-all" class="img-fluid right-section"/>
                    </div>
                </div>
            </div>

            <div className='container-fluid my-4'>
                <div className='col-md-11 col-12  text-center mx-auto'>
                    <h1 className='fw-bold'>Leading-Edge Web Development Services We Offer</h1>
                    <p>We specialize in transforming ideas into innovative products through comprehensive ideation and design processes. Our services cover everything from initial concept development to detailed product design, ensuring a seamless path from vision to creation.</p>
                </div>
            </div>
        </section>
    </>
  )
}
