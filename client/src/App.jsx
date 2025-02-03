import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App
