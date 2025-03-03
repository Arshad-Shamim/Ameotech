import React from 'react'

import {nav,footer} from './Home.jsx';
import viedo from '../assets/viedo1.mp4'
import story from '../assets/story.webp'
import '../cascading/aboutus.css'

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

      <section class="work-wire common-padding mt-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 work-culture mb-2">
              <img src="https://www.ameotech.com/images/Group%2086.png"/>
              <div class="col-12 mt-3">
                <img src="https://www.ameotech.com/images/exp-image-new.jpg" class="img-fluid"/>
              </div>

            </div>
            <div class="col-lg-6">
              <div>
                <h6 class="fs-3 fw-bold text-center text-md-start" style={{color:"#1933b5"}}>About Us</h6>
                <h2 class="mt-3 text-uppercase common-headings text-center text-md-start">
                  We’re a diverse, passionate group of tech enthusiasts
                </h2>
                <p class="mb-5 text-center text-md-start" id="work-tireless-para">
                  We are a dynamic team of individuals from different backgrounds
                  and perspectives, each bringing unique skills and insights to
                  the table. Our collective passion drives us to push boundaries,
                  challenge conventions, and continuously learn in an
                  ever-evolving tech landscape. From groundbreaking projects to
                  hands-on experimentation, we foster an environment where
                  creativity thrives and ideas come to life.
                </p>
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center" >
                      <h4 class="text-center text-md-start text-color" style={{color:"#1933b5"}}>500+</h4>
                      <h6 class="text-center text-md-start">Projects Completed</h6>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center">
                      <h4 class="text-center text-md-start" style={{color:"#1933b5"}}>200+</h4>
                      <h6 class="text-center text-md-start">Satisfied Customers.</h6>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center">
                      <h4 class="text-center text-md-start" style={{color:"#1933b5"}}>4.2</h4>
                      <h6 class="text-center text-md-start">Employee Happiness Index.</h6>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center">
                      <h4 class="text-center text-md-start" style={{color:"#1933b5"}}>90+</h4>
                      <h6 class="text-center text-md-start">
                        Awards &amp; <br/>
                        Certifications.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-5">
        <div class="container">
          <div class="row">
            <div class="choose p-0 pb-md-4 mx-auto d-flex align-items-center justify-content-center flex-column">
            <h2 class="text-uppercase text-center common-headings">
                Our <span class="colored-red-heading" style={{color:"#1933b5"}}>People </span>Are <span class="colored-red-heading" style={{color:"#1933b5"}}> Pioneers</span>
              </h2>
              <p class="text-left text-center">
                Driven by an expert leadership team and a highly skilled,
                certified tech workforce, we provide comprehensive IT support for
                both large and small-scale projects. With decades of combined
                experience, our team of certified developers and technicians is
                equipped to handle a wide range of technological challenges,
                ensuring seamless solutions for every need.
              </p>
            </div>
            <div class="row">
              <div class="col-md-4 col-12 d-flex flex-column align-items-center text-center mb-4">
                <div class="vision-text-heading">
                  <h6 class="card-red-heading" style={{color:"#1933b5"}}><b>Our Vision</b></h6>
                  <p>Consistently exceeding expectations.</p>
                </div>
                <div class="border-line-red w-75" style={{backgroundColor:"#1933b5"}}></div>
              </div>
              <div class="col-md-4 col-12 d-flex flex-column align-items-center text-center mb-4">
                <div class="vision-text-heading">
                  <h6 class="card-red-heading" style={{color:"#1933b5"}}><b>Our Mission</b></h6>
                  <p>Timely Delivery of Exceptional Services.</p>
                </div>
                <div class="border-line-red w-75" style={{backgroundColor:"#1933b5"}}></div>
              </div>
              <div class="col-md-4 col-12 d-flex flex-column align-items-center text-center mb-4">
                <div class="vision-text-heading">
                  <h6 class="card-red-heading" style={{color:"#1933b5"}}><b>Our Motto</b></h6>
                  <p>Your Success Drives Our Success!</p>
                </div>
                <div class="border-line-red w-75" style={{backgroundColor:"#1933b5"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='linear_gradient'>
        <div>
          <h1 className='text-center py-4 text-warning fw-bold'>The Story of Pratibha IT Solution</h1>
        </div>
        <div className='col-12'>
          <div className='text-center'>
            <img src={story} alt="" className='img-fluid h-25 w-75 rounded my-4'/>
          </div>
        </div>

        <div className='col-11 text-center mx-auto'>
          <p className='text-white fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, harum deserunt eius possimus id sapiente cum at facilis natus. Aut temporibus mollitia exercitationem nostrum quod molestias hic, nihil enim eius, itaque voluptatum fugit sint illum vel a magni dolore! Tempore unde id dicta quae, nam consectetur. Laboriosam necessitatibus dignissimos exercitationem corrupti in perspiciatis provident repudiandae, labore reprehenderit consectetur sit odio voluptate? Aut ad, et, debitis, labore nemo provident in alias non aperiam minus quidem voluptatum commodi. Delectus, labore pariatur? Vel qui iste doloremque ullam provident, repellendus delectus placeat, nisi sequi impedit numquam doloribus! Animi explicabo dolor consequuntur quas possimus rerum!</p>
        </div>
      </section>
    </>
  )
}