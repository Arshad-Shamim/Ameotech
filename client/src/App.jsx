import { useState ,useEffect} from 'react'
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
import viedo from './assets/viedo1.mp4'
import Empowerment from './assets/Empowerment.jpg'
import Reflection from './assets/Reflection.webp'
import Accountability from './assets/Accountability.webp'
import ourServies from './assets/our_servies.png'
import Dedication from './assets/Dedication.jpg'
import CustomSolutions from './assets/CustomSolutions.jpg'
import Result from './assets/Result.webp'
import Testing from './assets/Testing.jpeg'
import Transparency from './assets/Transparency.jpg'
import SmartAutomation from './assets/SmartAutomation.jpg'
import aiml from './assets/aiml.webp'
import ai_ml_2 from './assets/ai-ml-2.jpg'
import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

function App() {

  return (
    <>

    {/* block1 */}
    <header>
      <nav class="navbar navbar-expand-lg border" style={{backgroundColor:"#f0f8ff"}}>
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={Logo} alt="logo" className='rounded'/>
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
          <video class="hero-video"  autoPlay loop muted >
            <source src={viedo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video></div>
    
          <div class="row align-items-center g-5 py-5 ps-3">
            <div class="col-12 col-lg-8 text-center text-lg-start heading-text d-flex align-items-start">
              <h1 class="text-start" id="top-heading">
                Creative Tech Solutions for
                <span id="home-colored-text"> Expanding Businesses</span>
              </h1>
              <p class="text-start w-100" id="top-heading-para">
                Founded in 2008, Pratibha IT Solution is a trusted software development company located in Mohali.
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
            <p class="big-number"><strong>17+ </strong></p>
            <p>Years of Experience</p>
          </div>
          <div class="col-md-3">
            <p class="big-number"><strong>98%</strong></p>
            <p>Returning Client Rate</p>
          </div>
          <div class="col-md-3">
            <p class="big-number"><strong>4.7</strong></p>
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
              <h2 class="common-headings">Core Principal</h2>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-md-4">
              <div class="card">
                <img src={Empowerment} class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Empowerment</h5>
                  <p class="card-text">
                  We enable our clients to aim high and lead the market by providing exceptional services through our cutting-edge custom digital solutions.                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src={Reflection} class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Reflection</h5>
                  <p class="card-text">
                  We prioritize self-assessment to consistently enhance our practices and deliver top-quality service.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
              <img src={Accountability} class="card-img-top" alt="Empowerment" style={{height:"200px",objectFit:"cover"}}/>
                <div class="card-body" style={{height:"150px",overflow:"hidden"}}>
                  <h5 class="card-title" id="empower-one">Accountability</h5>
                  <p class="card-text">
                  We own our actions and ensure the highest quality in the solutions we deliver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* box5 */}
      <section class="bg-image-service common-padding border" style={{background:"linear-gradient(90deg,#42e1d6, #1d3082)"}}>
        <div class="container">
          <div class="row service-section align-items-center">
            <div class="col-lg-6">
              <img class="img-fluid" src={ourServies} alt="Company service overview" height="230"/>
            </div>
            
            <div class="col-lg-6 right-section ps-0 ps-lg-5" id="service-center">
              <h2 class="common-headings" id="comp-service-title">Our Services</h2>
              <p id="company-service-para">
              At Pratibha Solution, we provide top-notch web development services, guiding projects from initial ideas to ongoing technical support. Our goal is to transform your vision into functional digital solutions through a wide range of software development services, including custom web development, mobile app development, software project management, UX/UI design, prototyping, performance testing, and compliance assurance. Utilizing technologies like Node.js, Python, Django, and more, we create innovative and effective solutions tailored to your needs.
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
            We excel in both development and testing, ensuring high-quality solutions. Additionally, we provide continuous support for feature enhancements, OS updates, and security upgrades.
            </p>
          </div>
        </div>



        <div class="container ">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 gx-4 gy-4">
            <div class="col">
              <div class="card choose-card-new">
                <img src={Dedication} class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Dedication</h5>
                  <p class="card-text  card-choose-us">commitment, and continuously innovate to meet industry standards and exceed customer expectations.</p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src={CustomSolutions} class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Custom Solutions</h5>
                  <p class="card-text  card-choose-us">Providing bespoke solutions designed to fit your specific requirements, we blend innovation, accuracy, and expertise to deliver exceptional custom solutions.</p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src={Result} class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Results</h5>
                  <p class="card-text  card-choose-us">Focused on delivering outstanding and innovative results, we ensure every project meets the highest standards of quality and performance.</p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src={Testing} class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Testing & Support</h5>
                  <p class="card-text  card-choose-us">Dedicated to providing reliable testing and support, we ensure seamless performance, swift issue resolution, and ongoing enhancements.</p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src="https://www.ameotech.com/images/Legitimacy-card-img.svg" class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Legitimacy</h5>
                  <p class="card-text  card-choose-us">Committed to upholding the highest standards of legitimacy, we ensure transparency, trust, and integrity in every aspect of our work.</p>
                </div>
              </div>
            </div>  

            <div class="col">
              <div class="card choose-card-new">
                <img src={Transparency} class="card-img-top" alt="Image 1"/>
                <div class="card-body">
                  <h5 class="card-title text-center text-lg-start">Transparency</h5>
                  <p class="card-text  card-choose-us">Driven by transparency and integrity, we ensure clear communication, open processes, and honest practices in every interaction. </p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* box7 */}
      <section className='container-fluid row'>

        <div className='col-12 col-md-6 container-fluid text-center'>
          <img src={SmartAutomation} alt="loading" className='col-10 h-100 rounded' style={{marginLeft:"6vw"}}/>
        </div>
        
        <div className='col-12 col-md-6 container-fluid'>
          <div className='container my-4 col-11' style={{marginLeft:"6vw"}}>
            <h3 className='text-uppercase fw-bold'>Revolutionizing Industries with Smart Automation</h3>
            <div className='container'>
              <div className='container'>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-primary me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Machine Learning</span>
                </h5>
                <p className='ms-3'>
                Machine Learning is a subset of AI that enables computers to analyze data.
                </p>
              </div>

              <div>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-primary me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Sensor Integration</span>
                </h5>
                <p className='ms-3'>
                Sensor integration combines data from multiple sensors to enhance precision, reliability, and overall system performance.</p>
              </div>

              <div>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-primary me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Computer Vision</span>
                </h5>
                <p className='ms-3'>
                Computer vision allows machines to analyze, interpret, and make sense of visual data, enabling automation and intelligent decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* box8 */}
      <section className='container-fluid row my-4 mx-0'>

        <div className='container col-12 col-md-6'>
          <div className='' style={{marginLeft:"6vw"}}>
            <h3 className='fw-bold'>Transform your industry with AI, LLM, and ML innovation.</h3>
            <div>
              <p><span className='fw-bold'>Unleash Potential:</span> Revolutionize your industry with AI, LLM, and ML.</p>
              <p><span className='fw-bold'>Boost Productivity:</span> Optimize operations and innovate with AI and ML. </p>
              <p><span className='fw-bold'>Leverage Data:</span> Unlock insights and enhance customer experiences.</p>
            </div>

            <button type="button" class="btn btn-primary" style={{background:"linear-gradient(90deg,#1db7c5, #1d3082)"}}>Know more....</button>          
          </div>
        </div>
        
        <div className='container-fluid col-12 col-md-6 text-center'>
          <img src={ai_ml_2} alt="loading...." className='my-4 my-md-0 rounded col-md-12 col-10'/>
        </div>
      </section>

    <section class="slider-bg-main">
      <div class="container-fluid mt-5 common-padding">
      <div id="myCarousel" class="carousel slide mb-6 bg" data-bs-ride="carousel">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators" id="move-down-carousal">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            {/* <!-- Your slides here --> */}
          </div>
        </div>
          {/* <!-- Title placed outside the carousel items --> */}
        

          <div class="carousel-inner">
            <div class="text-center mt-3">
              <h2 id="exp-review">
                Our Experience <br/>
                Clients Satisfaction
              </h2>
            </div>
            <div class="carousel-item text-center">
            
              {/* <!-- <img src="./images/slider-one-img.webp" alt="slider-one-img" class="d-block mx-auto" style="width: 70%;"> --> */}
              <div class="col-lg-6 offset-lg-3">
            
                
                {/* <!-- Slider for the second column --> */}
                <div class="testimonial-slide client-slider-section">
                  <div class="container">
                    <div class="slider-container">
                      <div class="slide-item">
                        
                        <ul class="list-inline">
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        </ul>
                        <p class="text-white mb-3 text-left client-msg">
                          Had some very specific requests for design of my UX/UI
                          and was interested in getting it into a staging
                          environment to have some static pages done up. Good
                          work.
                          <span id="dots">...</span>
                          <span id="more">
                            While it wasn't always right on the first try,
                            that was partially due to me passing over Balsamiq
                            mockups. The end result was good quality work. Spend a
                            little more time on the discussions, planning things
                            out, sending over very specific instructions or design,
                            and Jatin, and this firm (Ameotech) are absolutely a
                            good company to work with.
                          </span>
                          <span id="read-more-link" onclick="myFunction1()">Read more</span>
                        </p>
                        <div class="image-content d-flex">
                          <div>
                            <img class="client-profile" src="https://www.ameotech.com/images/Derek%20Thomas.svg" alt="Client Image"/>
                          </div>
                          <div class="ms-2 text-white slider-content-new mt-2">
                            <h6>Derek Thomas</h6>
                            <p>CEO at Virtue security</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
              </div>
            </div>
            <div class="carousel-item text-center active">
              {/* <!-- <img src="./images/slider-two-img.webp" alt="slider-two-img" class="d-block mx-auto" style="width: 70%;"> --> */}
              <div class="col-lg-6 offset-lg-3">
                {/* <!-- Slider for the second column --> */}
                <div class="testimonial-slide client-slider-section">
                  <div class="slider-container">
                    <div class="slide-item">
                      <ul class="list-inline">
                      <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                      </ul>
                      <p class="text-white mb-3 text-left client-msg">
                        As a Full Stack Python Web Developer, this supplier has been responsible
                        for managing the interchange of data between the server and the users of a
                        coupon website, targeting the UK online retail market, and a web hosting
                        site targeting the USA.
                        <span id="dots1">...</span>
                        <span id="more1">
                          His primary focus has been the development of all server-side logic, ensuring high performance
                          and responsiveness to requests from the front-end. He has also been responsible for building and
                          integrating the front-end elements built. Though at the start of the project there was a serious
                          underestimation of the amount of work involved.
                        </span>
                        <span id="read-more-link1" onclick="myFunction2()">Read more</span>
                      </p>
                      <div class="image-content d-flex">
                        <div>
                          <img class="client-profile" src="https://www.ameotech.com/images/Alex.svg" alt="Client Image"/>
                        </div>
                        <div class="ms-2 text-white slider-content-new mt-2">
                          <h6>Alex Papaconstantinou</h6>
                          <p>Owner of Wikigains (UK top coupon website)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item text-center">
              <div class="col-lg-6 offset-lg-3">
                {/* <!-- Slider for the second column --> */}
                <div class="testimonial-slide client-slider-section">
                  <div class="slider-container">
                    <div class="slide-item">
                      <ul class="list-inline">
                      <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                      </ul>
                      <p class="text-white mb-3 text-left client-msg">
                        The company is happy with Ameotech Informatics’ quality of work and performance. They follow
                        processes well and deliver on time. The end customers also praise their work. The team has proven
                        to be extremely reliable, and their resources are great developers. Overall, the engagement is a
                        success.
                      </p>
                      <div class="image-content d-flex">
                        <div>
                          <img class="client-profile" src="https://www.ameotech.com/images/Shachindra.svg" alt="Client Image"/>
                        </div>
                        <div class="ms-2 text-white slider-content-new mt-2">
                          <h6>Shachindra agarwal</h6>
                          <p>President &amp; CEO – SWStrategies LLC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item text-center">
              <div class="col-lg-6 offset-lg-3">
                {/* <!-- Slider for the second column --> */}
                <div class="testimonial-slide client-slider-section">
                  <div class="slider-container">
                    <div class="slide-item">
                      <ul class="list-inline">
                      <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                      </ul>
                      <p class="text-white mb-3 text-left client-msg">
                        Ameotech Informatics has successfully delivered the tasks on time, gaining recognition from an end
                        client for driving the accuracy of business transactions. They have efficiently utilized various
                        modes of communication. Customers can expect a collaborative team with an open management style.
                      </p>
                      <div class="image-content d-flex">
                        <div>
                          <img class="client-profile" src="https://www.ameotech.com/images/Ijaz.svg" alt="Client Image"/>
                        </div>
                        <div class="ms-2 text-white slider-content-new mt-2">
                          <h6>Ijaz Parpia</h6>
                          <p>Managing Partner, DecisionGPS LLC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item text-center">
              <div class="col-lg-6 offset-lg-3">
                {/* <!-- Slider for the second column --> */}
                <div class="testimonial-slide client-slider-section">
                  <div class="slider-container">
                    <div class="slide-item">
                      <ul class="list-inline">
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                        <li><img src="https://www.ameotech.com/images/star.png" alt="Star"/></li>
                      </ul>
                      <p class="text-white mb-3 text-left client-msg">
                        Working for years together and would recommend to anyone.
                      </p>
                      <div class="image-content d-flex">
                        <div>
                          <img class="client-profile" src="https://www.ameotech.com/images/Ijaz-edited.svg" alt="Client Image"/>
                        </div>
                        <div class="ms-2 text-white slider-content-new mt-2">
                          <h6>Elliot Frantz</h6>
                          <p>CEO at Virtue security</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    {/* box8 */}
  <section id="tech-div-section" class="common-padding">
    <div class="container">
      <div id="tech-div">
        <h2 class="common-headings">Technologies We Work On</h2>
        <p>Get work done in 200+ different technologies</p>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/react-native.webp" alt="react-native" class="img-fluid" height="70"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/python-logo.svg" alt="python-logo" class="img-fluid" id="python-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/dotnet.svg" alt="dotnet" class="img-fluid"/>
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
          <img src="https://www.ameotech.com/images/Ionic-new.webp" alt="Ionic" class="img-fluid"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/Flutter-new.webp" alt="Flutter" class="img-fluid"/>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/django-logo-positive.svg" alt="django-logo-positive" class="img-fluid"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/mongodb-logo.svg" alt="mongodb-logo" class="img-fluid"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/aws-logo.svg" alt="aws" class="img-fluid" id="aws-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/sql-logo.svg" alt="Flutter" class="img-fluid"/>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/javascript.svg" alt="javascript" class="img-fluid"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/ml%201.svg" alt="ml" class="img-fluid" id="machine-learning-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/devops-logo.svg" alt="DevOps" class="img-fluid" id="devops-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/angular.svg" alt="angular" class="img-fluid"/>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/azure-logo.svg" alt="azure-logo" class="img-fluid" id="azure-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/html5.svg" alt="html" class="img-fluid" id="machine-learning-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/CSS3_-newww%201.svg" alt="CSS3" class="img-fluid" id="css-img"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center border-column">
          <img src="https://www.ameotech.com/images/AI-logo.svg" alt="AI-logo" class="img-fluid" id="ai-img"/>
        </div>
      </div>
    </div>
  </section>


    {/* box9 */}
  <section className='px-4'>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ps-4">
        <div class="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
          <img src={aiml} class="img-fluid rounded" alt="robot-developer"/>
        </div>
        <div class="col-12 col-lg-6 top-reason-text text-center text-lg-start text-md-start" id="target-para">
        
          <div class="sub-content d-flex align-items-start ">
            <img src={one} alt="dotted-shape-new" className='' style={{height:"4vh"}}/>
            <div class="sub-title ps-2">
              <h5>Expertise in AI and Robotics</h5>
              <p>Robotic system integration combines hardware and software to enhance automation and operational efficiency.</p>
            </div>
          </div>
          <div class="sub-content d-flex align-items-start ">
            <img src={two} alt="dotted-shape-new" style={{height:"4vh"}}/>
            <div class="sub-title ps-2">
              <h5>Leading in Machine Learning: New Innovations and Future Trends.</h5>
              <p>The future of machine learning will bring innovation through deep learning, edge computing, and explainable AI, revolutionizing industries like healthcare and finance</p>
            </div>
          </div>
          <div class="sub-content d-flex align-items-start ">
            <img src={three} alt="dotted-shape-new" style={{height:"4vh"}}/>
            <div class="sub-title ps-2">
              <h5>Excelling in AI and Automation for Future-Ready Solutions.</h5>
              <p>This emphasizes using AI and automation to develop innovative solutions that boost efficiency and drive progress across various industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* box10 */}
    <div class="container-fluid footer" id="footer-bg-color" style={{background:"linear-gradient(90deg,#42e1d6, #1d3082)"}}>
      <footer class="text-light mt-5">
      <div class="container">
        <div class="row py-4">

          <div class="col-md-3 mb-3 footer-logo-sec">
            <a href="index.html">
              <img src={Logo2} alt="ameotech-logo-white" id="footer-logo"/>
            </a>
            <p id="footer-first-para">
            Founded in 2008, Pratibha IT Solution is a trusted software development company located in Mohali.
            </p>
          </div>
          
          <div class="col-md-3 mb-3 footer-logo-sec">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="index.html" class="footer-nav">Home</a></li>
              <li><a href="aboutus.html" class="footer-nav">About Us</a></li>
              <li><a href="career.html" class="footer-nav">Career</a></li>
              <li>
                <a href="services.html" class="footer-nav">Services</a>
              </li>
              <li>
                <a href="technologies.html" class="footer-nav">Technologies</a>
              </li>
              <li>
                <a href="contact.html" class="footer-nav">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-3 resource-content">
            <h5>Case Studies</h5>
            <ul class="list-unstyled">
              <li>
                <a href="casestudy.html" class="footer-nav">Healthcare Solution</a><br/>
                <a href="lyc.html" class="footer-nav">Social Wellness Application</a><br/>
                <a href="crm.html" class="footer-nav">An approach to CRM </a><br/>
                <a href="uidesign.html" class="footer-nav">Best in-class for UI/UX design </a><br/>
                <a href="payment.html" class="footer-nav"> Payment Gateways with E-commerce </a><br/>
                <a href="food.html" class="footer-nav">Custom Products Dispatcher</a><br/>
                <a href="E-learning.html" class="footer-nav">E-learning, App and Web</a><br/>
                <a href="Solution-services.html" class="footer-nav">Problems, Solution and Services </a><br/>
              </li>
            </ul>
          </div>

          <div class="col-md-3 add-content">
            <h5>Address</h5>
            <div class="d-flex align-items-center mb-2">
              <img src="https://www.ameotech.com/images/location.webp" alt="location" height="20" class="me-2"/>
              <p class="mb-0 other-link">
                C-127, FF, IND Area, Phase 8, Mohali, Punjab - 160055
              </p>
            </div>
            <div class="d-flex align-items-center mb-2">
              <img src="https://www.ameotech.com/images/mail.webp" alt="mail" height="20" class="me-2"/>
              <p class="mb-0 mt-0">info@ameotech.com</p>
            </div>
            <div class="d-flex align-items-center mb-2">
              <img src="https://www.ameotech.com/images/phone.png" alt="phone" height="20" class="me-2"/>
              <h5 class="mb-0">+91 17240-29651</h5>
            </div>
          </div>

        </div>
      </div>

      <div class="container">
        <div class="row d-flex align-items-center justify-content-between border-top">
          {/* <!-- Copyright Section --> */}
          <div class="col-lg-6">
            <div class="copyright py-3">
              <p class="mb-0" id="copyright-text">
                ©2024 Pratibha IT Solution. All rights reserved.
              </p>
            </div>
          </div>
          {/* <!-- Social Media Section --> */}
          <div class="col-lg-6 d-flex justify-content-lg-end justify-content-start">
            <div class="social-media d-flex align-items-center">
              <p class="mb-0 me-2" id="follow-text">Follow Us:</p>
              <div class="d-flex">
                <a target="_blank" href="https://www.facebook.com/theameotech/">
                  <img src="https://www.ameotech.com/images/facebook.webp" alt="facebook" height="20" class="me-2"/>
                </a>
                <a target="_blank" href="
             https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHrpOlhpZs7cAAAAZQlj8ZYwQzjXqQMQmFsCM4Nl1Nshr6dp0ngJPLvQoGTyEVgRXOYgp6VmnTOyDUy6Uz3bqRyCbFHcukaZ-Q3PdOfjZD8V5B2FA7zdK6UDsLbwoBuXWon78Y=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fameo-tech">

                  <img src="https://www.ameotech.com/images/linkden.webp" alt="linkden" height="20" class="me-2"/>
                </a>
                <a target="_blank" href="https://www.youtube.com/@ameotechinformatics7911">
                  <img src="https://www.ameotech.com/images/youtube.webp" alt="youtube" height="20" class="me-2"/>
                </a>
                <a target="_blank" href="https://www.instagram.com/theameotech/">
                  <img src="https://www.ameotech.com/images/instagram.webp" alt="instagram" height="20"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
  </div>
    </>
  )
}

export default App
