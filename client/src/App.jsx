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

      {/* box7 */}
      <section className='container-fluid row'>

        <div className='col-12 col-md-6 container-fluid'>
          <img src="https://www.ameotech.com/images/empower-img.webp" alt="loading" className='col-10' style={{marginLeft:"6vw"}}/>
        </div>
        
        <div className='col-12 col-md-6 container-fluid'>
          <div className='container my-4'>
            <h3 className='text-uppercase fw-bold'>Empowering industries with intelligent Automation</h3>
            <div className='container'>
              <div>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-danger me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Machine Learning</span>
                </h5>
                <p className='ms-3'>
                  Machine Learning is a branch of AI that allows computers to learn from data
                </p>
              </div>

              <div>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-danger me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Sensor Integration</span>
                </h5>
                <p className='ms-3'>
                Sensor integration merges data from various sensors for improved accuracy.                </p>
              </div>

              <div>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-diamond-fill text-danger me-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
                  </svg>
                  <span>Computer Vision</span>
                </h5>
                <p className='ms-3'>
                Computer vision enables machines to interpret and understand visual information.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* box8 */}
      <section className='container-fluid row my-4'>

        <div className='container col-12 col-md-6'>
          <div className='' style={{marginLeft:"6vw"}}>
            <h3 className='fw-bold'>Revolutionize your Industry with AI, LLM and ML</h3>
            <div>
              <p><span className='fw-bold'>Unlock Possibilities:</span> Transform your industry with AI, LLM, and ML. </p>
              <p><span className='fw-bold'>Drive Efficiency:</span> Streamline operations and innovate with AI and ML. </p>
              <p><span className='fw-bold'>Harness Data:</span> Gain insights and personalize customer interactions.  </p>
            </div>

            <button type="button" class="btn btn-primary" style={{background:"linear-gradient(90deg, #253695,#b12e33)"}}>Know more....</button>          
          </div>
        </div>
        
        <div className='container col-12 col-md-6'>
          <img src="https://www.ameotech.com/images/revolution-comp.png" alt="loading...." className='col-12 my-4 my-md-0'/>
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
          <img src="https://www.ameotech.com/images/robot-developer.webp" class="img-fluid" alt="robot-developer"/>
        </div>
        <div class="col-12 col-lg-6 top-reason-text text-center text-lg-start text-md-start" id="target-para">
        
          <div class="sub-content d-flex align-items-start ">
            <img src="https://www.ameotech.com/images/num01.svg" alt="dotted-shape-new"/>
            <div class="sub-title ps-2">
              <h5>Expertise in AI and Robotics</h5>
              <p>Robotics system integration merges components and software for optimized automation and operational
                efficiency</p>
            </div>
          </div>
          <div class="sub-content d-flex align-items-start ">
            <img src="https://www.ameotech.com/images/num02.svg" alt="dotted-shape-new"/>
            <div class="sub-title ps-2">
              <h5>Leading the Way in Machine Learning: Innovations and Future Trends</h5>
              <p>Machine learning's future will drive innovation with deep learning, edge computing, and explainable AI, transforming industries like healthcare and finance</p>
            </div>
          </div>
          <div class="sub-content d-flex align-items-start ">
            <img src="https://www.ameotech.com/images/num03.svg" alt="dotted-shape-new"/>
            <div class="sub-title ps-2">
              <h5>Mastering AI and Automation for Next-Generation Solutions</h5>
              <p>This focuses on leveraging AI and automation to create innovative, next-generation solutions that enhance efficiency and drive progress across industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
