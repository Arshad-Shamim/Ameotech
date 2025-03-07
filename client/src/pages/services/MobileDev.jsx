import React from 'react'

import {nav,footer} from "../Home.jsx"
import mobile_app from "../../assets/mobile_app.png"
import kotline from "../../assets/kotline.jpeg"
import java from '../../assets/java.png'
import flutter from '../../assets/flutter.webp'
import Xamarin from '../../assets/Xamarin.png'
import flask from '../../assets/flask.png'
import ruby from '../../assets/ruby.png'
import cross_platform from '../../assets/cross_platform.png'
import faster_load from '../../assets/faster_load.png'
import user_exprience from '../../assets/user_exprience.png'
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
                    <h1 className='fw-bolder'>Tailored Mobile App Solutions to <span className="text-warning">Enhance Your Brand </span></h1>
                    <p>Pratibha IT Solution develops custom iOS and Android apps tailored to your business goals. We deliver scalable, user-focused solutions for customer engagement, e-commerce, and enterprise needs, ensuring high performance and growth.</p>
                </div>
            </div>

            <div className='col-md-5 col-12 d-flex'>
                <div className='mx-auto my-auto col-11'>
                    <img src={mobile_app} alt="" className='img-fluid rounded'/>
                </div>
            </div>
        </section>

        <section id="tech-div-section" class="common-padding">
                <div class="container">
                    <div id="tech-div">
                        <h2 class="common-headings">Technologies We Use</h2>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/react-native.webp" alt="react-native" class="img-fluid" height="70"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={kotline} alt="python-logo" class="img-fluid" id="python-img"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={java} alt="dotnet" class="img-fluid" style={{maxHeight:"55px"}}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/Swift-new.webp" alt="Swift" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/IOS-new.webp" alt="IOS" class="img-fluid"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/Android-new.webp" alt="Android" class="img-fluid"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={flutter} alt="Ionic" class="img-fluid"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={Xamarin} alt="Flutter" class="img-fluid" style={{maxHeight:"55px"}}/>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={flask} alt="django-logo-positive" class="img-fluid" style={{maxHeight:"55px"}}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/mongodb-logo.svg" alt="mongodb-logo" class="img-fluid"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src={ruby} alt="aws" class="img-fluid" id="aws-img"/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
                        <img src="https://www.ameotech.com/images/sql-logo.svg" alt="Flutter" class="img-fluid"/>
                        </div>
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
                    <p>At Pratibha IT Solution, we craft custom iOS and Android apps that offer seamless, intuitive experiences. From concept to launch, we deliver scalable, high-performance solutions tailored to your business goals.</p>
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
                            We empower businesses with mobile-first solutions designed to elevate user experiences and maximize engagement. Our skilled team develops high-performance, intuitive apps optimized for seamless mobile functionality, keeping your business ahead in a mobile-centric world. Unlock the full potential of mobile technology with us to drive growth and success.
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
                                        Our cross-platform mobile app development ensures seamless performance on both iOS and Android, helping you save time and costs while reaching a broader audience. We deliver high-quality, scalable solutions tailored to your business needs.
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
                                        Enhancing load times for a faster, more seamless user experience. Reduce delays, boost engagement, and improve retention by optimizing performance. Faster load times drive higher user satisfaction, increased retention, and better business results.
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
                                     We develop mobile apps that provide a seamless, intuitive experience across all devices. Whether on smartphones, tablets, or desktops, our solutions ensure consistency, usability, and high performance.
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
