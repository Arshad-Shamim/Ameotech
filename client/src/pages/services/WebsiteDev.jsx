import React from 'react'

import {nav,footer} from '../Home.jsx';
import web_dev from '../../assets/web_dev.jpg'
import cross_platform from '../../assets/cross_platform.png'
import faster_load from '../../assets/faster_load.png'
import user_exprience from '../../assets/user_exprience.png'
import web_dev_image from '../../assets/web_dev_image.png'

export default function WebsiteDev() {
  return (
    <>
      <section>
        {nav()}
      </section>


      <section id="section1" className='container-fluid row py-4'>
            <div className='col-md-7 col-12 d-flex'>
                <div className='mx-auto my-auto col-10 text-white'>
                    <h1 className='fw-bolder'>Tailored Web Development Services to Enhance Your Brand</h1>
                    <p>We design and develop high-performance websites customized to strengthen your brand's online presence. Our skilled team delivers seamless functionality, responsive design, and optimized performance to boost engagement and drive growth.</p>
                </div>
            </div>

            <div className='col-md-5 col-12 d-flex'>
                <div className='mx-auto my-auto col-11'>
                    <img src={web_dev} alt="" className='img-fluid rounded'/>
                </div>
            </div>
        </section>



        <section class="tech-area common-padding">
            <div class="container">
                <div class="row py-3 py-md-0  d-flex align-items-center justify-content-center">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={web_dev_image} loading="lazy" alt="woman-web-dev" class="img-fluid left-section"/>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 tech-text" id="right-tech-web">
                        <h1 id="use-tech">Technologies We Use to Build Powerful Web Solutions</h1>
                        <img src="https://www.ameotech.com/images/tech-images-all.svg" loading="lazy" alt="web-development-all" class="img-fluid right-section"/>
                    </div>
                </div>
            </div>

            <div className='container-fluid my-4'>
                <div className='col-md-11 col-12  text-center mx-auto'>
                    <h1 className='fw-bold'>Cutting-Edge Web Development Services We Provide</h1>
                    <p>We excel at turning ideas into innovative products through a comprehensive ideation and design process. From concept development to detailed product design, we ensure a seamless journey from vision to reality.</p>
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
                    <h2 className='fw-bold'>Professional Web Development </h2>
                    <p>At Pratibha IT Solution, we craft custom iOS and apps that offer seamless, intuitive experiences. From concept to launch, we deliver scalable, high-performance solutions tailored to your business goals.</p>
                </div>
            </div>
        </section>


        <section>
            <div class="container customize-box py-5 my-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between flex-wrap">
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>17+</h4>
                                <p>Years in Custom Software Development.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>1000+</h4>
                                <p>Successfully Delivered Software Projects.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>97%</h4>
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
                            Accelerating Business Growth with Mobile-First Innovation
                        </h2>
                        <p id="drive-para">
                        We empower businesses with mobile-first solutions designed to enhance user experiences and maximize engagement. Our expert team develops high-performance, intuitive apps optimized for mobile devices, keeping your brand ahead in a mobile-centric world. Unlock the full potential of mobile technology with us to drive growth and success.
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
                                    <img src={cross_platform} loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">Cross Platform</h4>

                                    <p class="pt-3 card-para">
                                    Our cross-platform mobile app development ensures seamless functionality on both iOS and Android, helping you save time and costs while expanding your reach. We deliver high-quality, performance-driven solutions tailored to your business needs.
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
                                    <img src={faster_load} loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">Faster Loads, Better Experience.</h4>

                                    <p class="pt-3 card-para">
                                        Our cross-platform mobile app development guarantees seamless performance on both iOS and Android, reducing costs and development time while maximizing your audience reach. We deliver high-quality, user-friendly solutions tailored to your business needs.
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
                                    <img src={user_exprience} loading="lazy" alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                                </div>
                                <div class="inner-field-one d-flex flex-column ms-3" style={{flexGrow:"1"}}>
                                    <h4 class="mb-0">
                                        Seamless User Experience Across Devices
                                    </h4>
                                    <p class="pt-3 card-para">
                                        We develop mobile apps that provide a seamless, intuitive experience across all devices. Whether on smartphones, tablets, or desktops, our solutions ensure consistency and optimal performance.
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
