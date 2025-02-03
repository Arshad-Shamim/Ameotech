import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './responsive.css'
import './pipToggle.css'
import './viedo.css'
import './css2.css'
import './font-awsome.css'

import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* block1 */}
    <header>
      <nav class="navbar navbar-expand-lg bg-white border">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="https://www.ameotech.com/images/ameotech-logo-color.svg" alt="logo"/>
    

          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="aboutus.html">About Us</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Case Studies <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>

                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li class="mb-2"><a class="dropdown-item" href="casestudy.html">Healthcare Solution </a></li>
                  <li class="mb-2"><a class="dropdown-item" href="lyc.html">Social Wellness Application </a></li>
                  <li class="mb-2"><a class="dropdown-item" href="crm.html">An approach to CRM </a>
                  </li>
                  <li class="mb-2"><a class="dropdown-item" href="uidesign.html">Best in-class for UI/UX design </a></li>
                  <li class="mb-2"><a class="dropdown-item" href="payment.html">
                      Payment Gateways with E-commerce </a></li>
                  <li class="mb-2"><a class="dropdown-item" href="food.html">Custom Products Dispatcher </a>
                  </li>
                  <li class="mb-2"><a class="dropdown-item" href="E-learning.html">E-learning, App and Web </a></li>
                  <li class="mb-2"><a class="dropdown-item" href="Solution-services.html">Problems, Solution and Services
                    </a></li>
                </ul>


              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>


                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li class="mb-2"><a class="dropdown-item" href="mobileapp.html">Mobile App Development</a></li>
                  <li class="mb-2"><a class="dropdown-item" href="webdevelop.html">Web App Development</a></li>
                  <li class="mb-2"><a class="dropdown-item" href="development.html">Custom Software Development
                      Services</a></li>
                  <li class="mb-2"><a class="dropdown-item" href="product.html">Product Design</a></li>
                  <li class="mb-2"><a class="dropdown-item" href="digital.html">Digital Marketing</a></li>
                </ul>



              </li>
              <li class="nav-item">
                <a class="nav-link" href="career.html">Career</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="technologies.html">Technologies</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* block2 */}
    <section class="hero-section">
    {/* <!-- Hero Content --> */}
      <div class="hero-content">
        <div class="container py-0">
          {/* <!-- Placeholder for the Video (will be added dynamically) --> */}
          <div class="hero-video-container">
          <video autoplay="" loop="" muted="" class="hero-video">
            <source src="https://www.ameotech.com/images/tech-V01.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video></div>
    
          <div class="row align-items-center g-5 py-5 ps-3">
            <div class="col-12 col-lg-8 text-center text-lg-start heading-text d-flex align-items-start">
              <h1 class="text-start" id="top-heading">
                Innovative Digital Solutions for
                <span id="home-colored-text">Business Growth</span>
              </h1>
              <p class="text-start w-100" id="top-heading-para">
                Established in 2010, Ameotech Informatics is a reputable software
                development firm based in Mohali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* block3 */}
    <div className='container'>
      <div class="custom-container">
        <div class="row text-center">
          <div class="col-md-3">
            <p class="big-number"><strong>14+ </strong></p>
            <p>
              Years of Experience</p>
          </div>
          <div class="col-md-3">
            <p class="big-number"><strong>97% </strong></p>
            <p>Returning Client Rate</p>
          </div>
          <div class="col-md-3">
            <p class="big-number"><strong>4.2</strong></p>
            <p> Employee Happiness Index</p>
          </div>
          <div class="col-md-3">
            <p class="big-number"><strong>90+</strong></p>
            <p> Awards and Certifications</p>
          </div>
        </div>

        {/* <!-- Button below the row --> */}
        <div class="text-center mt-4">
          <a href="./contact.html" class="btn btn-primary" id="consult-btn">Get <span>free</span> consultation</a>
        </div>
      </div>
    </div>

    {/* box4 */}
    <section class="common-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 core-title text-center">
              <h2 class="common-headings">Core Values</h2>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-md-4">
              <div class="card">
                <img src="https://www.ameotech.com/images/Empowerment-image.webp" class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Empowerment</h5>
                  <p class="card-text">
                  We empower our clientele to think big and be market leaders by helping them deliver great services through our innovative custom digital solutions. 
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="https://www.ameotech.com/images/Reflection-img-new.svg" class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Reflection</h5>
                  <p class="card-text">
                  We believe in reflecting on our practices to continually improve and provide the best service possible.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="https://www.ameotech.com/images/Responsiblity-image.webp" class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Responsibility</h5>
                  <p class="card-text">
                  We take responsibility for our actions and the quality of the solutions we provide. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
