import React from 'react'

import {nav,footer} from './Home.jsx';
import viedo from '../assets/viedo1.mp4'
import story from '../assets/story.webp'
import aboutus2 from '../assets/aboutus2.jpg'
import aboutus1 from '../assets/aboutus1.webp'
import let_talk from '../assets/let_talk.webp'
import Tirelessly from '../assets/Tirelessly.avif'
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
                Your Reliable Ally in Growth, Leading You<span className='text-warning'> to Achievement.</span>
                </h1>
                <p class="text-start w-100" id="top-heading-para">
                  At Pratibha IT Solution, we are your trusted partner in transformation, offering expert guidance to turn challenges into opportunities. We work closely with you to deliver tailored solutions that drive success and achieve your goals, every step of the way.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      

      <section class="work-wire common-padding mt-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 work-culture mb-2">
              <img src={aboutus1} className="rounded"/>
              <div class="col-12 mt-3">
                <img src={aboutus2} class="img-fluid rounded"/>
              </div>

            </div>
            <div class="col-lg-6">
              <div>
                <h6 class="fs-3 fw-bold text-center text-md-start" style={{color:"#1933b5"}}>About Us</h6>
                <h2 class="mt-3 text-uppercase common-headings text-center text-md-start">
                  We are a dynamic and passionate team of technology enthusiasts.
                </h2>
                <p class="mb-5 text-center text-md-start" id="work-tireless-para">
                  We are a vibrant team of professionals with diverse backgrounds and perspectives, each contributing unique skills and insights. United by our passion for technology, we strive to push boundaries, challenge norms, and embrace continuous learning in an ever-evolving digital world. From innovative projects to hands-on exploration, we cultivate an environment where creativity flourishes and ideas turn into reality.
                </p>
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center" >
                      <h4 class="text-center text-md-start text-color" style={{color:"#1933b5"}}>300+</h4>
                      <h6 class="text-center text-md-start">Projects Completed</h6>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center">
                      <h4 class="text-center text-md-start" style={{color:"#1933b5"}}>100+</h4>
                      <h6 class="text-center text-md-start">Satisfied Customers.</h6>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="border-heading align-items-center justify-content-center">
                      <h4 class="text-center text-md-start" style={{color:"#1933b5"}}>4.3</h4>
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
                Led by an experienced leadership team and a highly skilled, certified tech workforce, we offer end-to-end IT support for projects of all sizes. With years of collective expertise, our certified developers and technicians are well-equipped to tackle diverse technological challenges, delivering seamless and efficient solutions for every requirement.
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
          <h1 className='text-center pt-5  text-warning fw-bold'>The Story of Pratibha IT Solution</h1>
        </div>
        <div className='col-12'>
          <div className='text-center'>
            <img src={story} alt="" className='img-fluid h-25 w-75 rounded my-4'/>
          </div>
        </div>

        <div className='col-11 text-center mx-auto pt-4 pb-5'>
          <p className='text-white fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, harum deserunt eius possimus id sapiente cum at facilis natus. Aut temporibus mollitia exercitationem nostrum quod molestias hic, nihil enim eius, itaque voluptatum fugit sint illum vel a magni dolore! Tempore unde id dicta quae, nam consectetur. Laboriosam necessitatibus dignissimos exercitationem corrupti in perspiciatis provident repudiandae, labore reprehenderit consectetur sit odio voluptate? Aut ad, et, debitis, labore nemo provident in alias non aperiam minus quidem voluptatum commodi. Delectus, labore pariatur? Vel qui iste doloremque ullam provident, repellendus delectus placeat, nisi sequi impedit numquam doloribus! Animi explicabo dolor consequuntur quas possimus rerum!</p>
        </div>
      </section>

      <section class="work-wire common-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 work-culture">
              <div class="work-less">
                <h2 class="common-headings colored-red-heading text-center text-md-start">We Work Tirelessly</h2>
                <p id="work-tireless-para" class="text-center text-md-start">
                  We are dedicated to providing top-notch software solutions customized to meet our clients' unique needs. Our passionate team thrives on innovation and excellence, consistently surpassing expectations and tackling challenges head-on. With an unwavering commitment to quality, we turn ideas into powerful solutions that drive success.
                </p>
              </div>
              <div class="row">
                <div class="col-12 col-md-8 mb-5 mb-md-0">
                  <div class="dotted-border p-5">
                    <h3 class="card-red-heading">OUR WORK CULTURE</h3>
                    <div class="d-flex align-items-start right-section-content mb-4">
                      <div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 title-content-one">
                        <img src="https://www.ameotech.com/images/Frame%2095.png" alt="Dotted shape" class="img-fluid"/>
                        <h4 class="ms-1" id="sub-title-one">
                          Fostering Inspiring Innovations.
                        </h4>
                      </div>
                    </div>
                    <div class="d-flex align-items-start right-section-content mb-4">
                      <div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 title-content-one">
                        <img src="https://www.ameotech.com/images/Frame%2095.png" alt="Dotted shape" class="img-fluid"/>
                        <h4 class="ms-1" id="sub-title-two">
                          Promotes Personal Growth..
                        </h4>
                      </div>
                    </div>
                    <div class="d-flex align-items-start right-section-content mb-4">
                      <div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 title-content-one">
                        <img src="https://www.ameotech.com/images/Frame%2095.png" alt="Dotted shape" class="img-fluid"/>
                        <h4 class="ms-1" id="sub-title-three">
                          Encourages Work-Life Harmony.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
            </div>
            <div class="col-lg-6">
              <img src={Tirelessly} class="align-right"/>
            </div>
          </div>
        </div>
      </section>


      <section class="slider-bg common-padding-new linear_gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h4 class="text-white m-0 text-center text-md-start">
                Kickstart Your Journey with <b><span class="text-warning">
                    Pratibha IT Solution
                  </span></b>
              </h4>
              <p class="text-white m-0 text-center text-md-start">
                Digitize your business and unlock new possibilities with our cutting-edge web solutions.
              </p>
            </div>
            <div class="col-md-4 text-center text-md-start mt-3 mt-md-0">
              <a href="./contact.html">
                <button class="explore">Explore Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="blue-bg-about  mb-5 linear_gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-white uppercase text-center common-headings pt-5">
                Our Leadership Team
              </h2>
            </div>
            <div class="images-group d-flex justify-content-center mt-5 mb-5">
              <img src="https://www.ameotech.com/images/Group%2089.png" alt="Image 89" class="image-item"/>
              <img src="https://www.ameotech.com/images/Group%2090.png" alt="Image 90" class="image-item"/>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us common-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 text-center">
              <div class="contact-img">
                <img src={let_talk} loading="lazy" className='rounded'/>
              </div>
            </div>
            <div class="col-lg-4">
            <h2 class="common-headings gen-subtitle"> Let's Talk </h2>
              <form id="form-div">
                <div class="row mb-3">
                  <div class="col-md-12">
                    <input type="text" class="form-control custom-input" id="name" placeholder="Your Name" required=""/>
                  </div>
                  <div class="col-md-12">
                    <input type="email" class="form-control custom-input" id="email" placeholder="Your Work Email" required=""/>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-12">
                    <select class="form-select custom-input" id="budget" required="">
                      <option selected="" disabled="">Select Budget</option>
                      <option value="under-1000">$0 - $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">$10,000+</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <input type="text" class="form-control" id="floatingMobile" placeholder="Mobile"style={{paddingLeft:"15px"}} maxlength="10" required="" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <button class="btn btn-primary common-btn" id="service-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
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