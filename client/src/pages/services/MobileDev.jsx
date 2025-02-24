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
                <div className='mx-auto my-auto col-10 text-white'>
                    <h1 className='fw-bolder'>Custom Mobile App Solutions to Elevate Your Brand</h1>
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
                        <h1 id="use-tech">Technologies We Use to Build Powerful Mobile Apps Solutions</h1>
                        <img src="https://www.ameotech.com/images/tech-images-all.svg" loading="lazy" alt="web-development-all" class="img-fluid right-section"/>
                    </div>
                </div>
            </div>

            <div className='container-fluid my-4'>
                <div className='col-md-11 col-12  text-center mx-auto'>
                    <h1 className='fw-bold'>Leading-Edge Mobile App Development Services We Offer</h1>
                    <p>We offer cutting-edge mobile app development services, creating custom iOS and Android apps that
                        deliver seamless user experiences and robust functionality. From concept to launch, we help bring your
                        ideas to life with innovative, high-performance solutions.
                    </p>
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
                    <h2 className='fw-bold'>Mobile App Development</h2>
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

        <section class="partnered-section common-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 product-text-web text-center">
                        <h2 id="driving-heading">
                            Driving Business Success with Mobile-First Excellence
                        </h2>
                        <p id="drive-para">
                            We help drive business success by delivering mobile-first
                            solutions that enhance user experiences and boost engagement. Our
                            expert team creates high-performance, intuitive apps optimized for
                            mobile devices, ensuring your business stays ahead in a
                            mobile-driven world. Let us help you unlock the full potential of
                            mobile technology to accelerate growth and success.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section class="">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                            <div class="fileds-cards-one d-flex" style={{alignItems:"stretch"}}>
                                {/* <!-- Content Section --> */}
                                <div class="image-container">
                                    <img src="https://www.ameotech.com/images/platform%201.png" loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">Cross Platform</h4>

                                    <p class="pt-3 card-para">
                                        Our cross-platform mobile app development ensures your app
                                        works seamlessly on both iOS and Android, saving time and
                                        costs while reaching a wider audience. We deliver
                                        high-quality .
                                    </p>
                                </div>
                                {/* <!-- Image Section --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                            <div class="fileds-cards-one d-flex card-responsive" style={{alignItems:"stretch"}}>
                                {/* <!-- Content Section --> */}
                                <div class="image-container">
                                    <img src="https://www.ameotech.com/images/speed%201.png" loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">Faster Loads, Better Experience.</h4>

                                    <p class="pt-3 card-para">
                                        Optimizing load times for faster, smoother user experiences. Improve engagement,
                                        retention, and performance by reducing delays and enhancing overall
                                        satisfaction. A quicker load time leads to higher user retention and better
                                        business outcomes.
                                    </p>
                                </div>
                                {/* <!-- Image Section --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                            <div class="fileds-cards-one d-flex" style={{alignItems:"stretch"}}>
                                {/* <!-- Content Section --> */}
                                <div class="image-container">
                                    <img src="https://www.ameotech.com/images/ui-design%201.png" loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">
                                        Seamless User Experience Across Devices
                                    </h4>
                                    <p class="pt-3 card-para">
                                        We create mobile apps that deliver a consistent, intuitive
                                        experience across all devices. Whether on smartphones or
                                        desktops..
                                    </p>
                                </div>
                                {/* <!-- Image Section --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            {footer()}
        </section>

    </>
  )
}
