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
        
        
        <section className='container-fluid row' style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))",minHeight:"350px"}}>
            <div className='col-md-6 col-12 d-flex py-4' style={{minHeight:"350px"}}>
                <div className='col-11 border mx-auto my-auto  py-4 ps-3 rounded text-white border-2'>
                    <div className='col-10 py-4'>
                        <h4 className='border-bottom fw-bold'>01.Professional Web Development</h4>
                        <h4 className='border-bottom fw-bold'>02.Mobile-First Web Development</h4>
                        <h4 className='border-bottom fw-bold'>03.Performance Optimization</h4>
                        <h4 className='border-bottom fw-bold'>04.Web Apps & WPA</h4>
                        <h4 className='border-bottom fw-bold'>05.Responsive Web Design</h4>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-12 d-flex'>
                <div className='col-10 col-md-11  my-md-4 pt-md-3 text-white mx-md-0 mx-auto'>
                    <h1>Mobile App Development</h1>
                    <p>At Ameotech Informatics, we craft custom iOS and apps that offer seamless, intuitive experiences. From concept to launch, we deliver scalable, high-performance solutions tailored to your business goals. </p>
                </div>
            </div>
        </section>


        <section>
            <div class="container customize-box py-5 my-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between flex-wrap">
                        <div class="col-md-3">
                            <div class="number-count text-center">
                                <h4>17+</h4>
                                <p>Years in Custom Software Development.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="number-count text-center">
                                <h4>2000+</h4>
                                <p>Successfully Delivered Software Projects.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="number-count text-center">
                                <h4>95%</h4>
                                <p>Customer Retention Rate Metrics..</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center heading-text mt-5">
                        <a href="/contactus" class="btn rounded-pill">Discuss Your Design Requirements</a>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
