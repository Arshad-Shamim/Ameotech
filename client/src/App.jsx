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
                  Case Studies 
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill ms-1" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
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
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill ms-1" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
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
            <p>Years of Experience</p>
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


      {/* box5 */}
      <section class="bg-image-service common-padding border" style={{background:"linear-gradient(90deg, #253695,#b12e33)"}}>
        <div class="container">
          <div class="row service-section align-items-center">
            <div class="col-lg-6">
              <img class="img-fluid" src="https://www.ameotech.com/images/company-service-image-min.png" alt="Company service overview" height="230"/>
            </div>
            
            <div class="col-lg-6 right-section ps-0 ps-lg-5" id="service-center">
              <h2 class="common-headings" id="comp-service-title">Company Services</h2>
              <p id="company-service-para">
                At Ameotech, we deliver high-quality web development services from the early conception stage to tech
                support. We aim to turn your vision into workable features by offering a comprehensive range of software
                development services, including custom web development, mobile app development, software project management,
                UX design and prototyping, testing (load &amp; performance testing), and compliance. We work with technologies
                such as Node JS, Python, Django, and more to develop problem-solving products.
              </p>
              <a href="./services.html">
                <button class="btn btn-primary common-btn" id="service-btn">
                  Know more...
                </button>
              </a>
        
            </div>
          </div>
        </div>
      </section>


      {/* box6 */}
      <section class="common-padding">
        <div class="container">     
          <div class="choose p-0 pb-md-4 mx-auto text-center">
            <h2 class="common-headings" id="choose-us">Why Choose Us?</h2>
            <p>
              We are just as good with testing as we are with developing. You also
              receive ongoing support for any feature add-ons as well as OS and
              security upgrade compatibility.
            </p>
          </div>
        </div>



        <div class="container ">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 gx-4 gy-4">
            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/dedication-img-comp.webp" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Dedication</h5>
                  <p class="card-text  card-choose-us">Dedication is the foundation of success in the printing and typesetting
                    industry. It drives us to deliver quality, embrace innovation, and exceed expectations. </p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/custom-solution-img.svg" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Custom Solutions</h5>
                  <p class="card-text  card-choose-us">Offering custom solutions tailored to meet your unique needs, we combine creativity, precision, and expertise to deliver  </p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/result-card-img.png" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Results</h5>
                  <p class="card-text  card-choose-us">Focused on delivering outstanding and innovative results, we ensure every project meets the highest standards of  </p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/Testing%20-Support-img.png" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Testing & Support</h5>
                  <p class="card-text  card-choose-us">Dedicated to providing reliable testing and support, we ensure seamless performance, quick resolutions, and continuous </p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/Legitimacy-card-img.svg" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Legitimacy</h5>
                  <p class="card-text  card-choose-us">Committed to upholding the highest standards of legitimacy, we ensure transparency, trust, and integrity in every </p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/Transparency-card-img.svg" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Transparency</h5>
                  <p class="card-text  card-choose-us">Driven by transparency and integrity, we ensure clear communication, open processes, and honest practices in every </p>
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
