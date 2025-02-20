import React from 'react'

import {nav,footer} from './Home.jsx';
import job_tittle from '../assets/job_tittle.png'
import exprience from '../assets/exprience.jpg'
import joining from '../assets/joining.jpg'
import webdev from '../assets/webdev.jpg'
import seo from '../assets/seo.png'
import ui_ux from '../assets/ui_ux.jpg'
import angular from '../assets/angular.png'
import ios from '../assets/ios.png'
import php from '../assets/php.png'
import graphic_design from '../assets/graphic_design.png'
import react from '../assets/react.png'
import marketing from '../assets/marketing.png'
import seo_execution from '../assets/seo_execution.png'
import ios_developer from '../assets/ios_developer.webp'
import '../cascading/career.css'

export default function Career() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section>
        <div className='container col-12 my-2'>
          <div id="bg-img" className='col-12 mx-auto rounded d-flex'>
              <div className='text-uppercase text-white fw-bolder mx-auto my-auto col-10 text-center'>
                <h1 className='top-font'>we Don’t sell courses, </h1>
                <h1 className='text-warning top-font'>sell solutions.</h1>
              </div>
          </div>
        </div>
      </section>


      <section class="job-filter-section py-0 py-md-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div class="job-title d-flex align-items-center mb-4 mb-lg-0">
                <img src={job_tittle} alt="Job Title Image" class="job-image"/>
                <h2 class="ms-3">Job Title</h2>
                <div class="border-line mx-3"></div>
                  <select class="experience-dropdown form-select w-auto">
                    <option value="">Select Job Title</option>
                    <option value="1">Angular Developer</option>
                    <option value="2">React Developer</option>
                    <option value="3">Python Developer</option>
                    <option value="4">UI/UX Designer</option>
                    <option value="5">React Native Developer</option>
                    <option value="6">Digital Marketer</option>
                  </select>
              </div>

              <div class="experience-field d-flex align-items-center mb-4 mb-lg-0">
                <img src={exprience} alt="Experience Image" class="job-image"/>
                <h2 class="mx-2">Experience</h2>
                <select class="experience-dropdown form-select w-auto">
                  <option value="">Select Experience</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                  <option value="6">6+ Years</option>
                </select>
              </div>

              <div class="search-bar">
                <input type="text" class="form-control search-input" placeholder="Search for jobs..."/>
                <button class="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-4'>
          <div className='col-md-10 col-12 mx-auto'>
            <div>
              <h1 className='text-uppercase fw-bold text-center'>Categories</h1>
            </div>

            <div className='my-2 row px-3'>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Web Developer</p>
                      <p className='mx-auto my-auto categories_sm'>10+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={webdev} alt="" className='col-md-6 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Seo Exceutive</p>
                      <p className='mx-auto my-auto categories_sm'>5+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={seo} alt="" className='col-md-6 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>UI/UX Lead</p>
                      <p className='mx-auto my-auto categories_sm'>3+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={ui_ux} alt="" className='col-md-6 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-9 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Angular Developer</p>
                      <p className='mx-auto my-auto categories_sm'>8+ Availability</p>
                    </div>
                    <div className='col-3 d-flex p-2'>
                      <img src={angular} alt="" className='col-md-7 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Ios Developer</p>
                      <p className='mx-auto my-auto categories_sm'>2+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={ios} alt="" className='col-md-5 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>PHP Developer</p>
                      <p className='mx-auto my-auto categories_sm'>4+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={php} alt="" className='col-md-6 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-9 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Graphic Designer</p>
                      <p className='mx-auto my-auto categories_sm'>7+ Availability</p>
                    </div>
                    <div className='col-3 d-flex p-2'>
                      <img src={graphic_design} alt="" className='col-md-5 col-4 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-12 mx-auto px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>React Developer</p>
                      <p className='mx-auto my-auto categories_sm'>9+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src={react} alt="" className='col-md-6 col-3 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
            </div>

            <div className='text-center my-4'>
              <button type="button" class="btn btn-primary">Know more...</button>
            </div>
          </div>
      </section>


      <section className='container-fluid row linear_grad p-4'>
        <div className='col-md-6 col-12 container text-white'>
          <div className='col-10 mx-auto'>
            <h1>Become a Part of the Pratibha IT Solution Team</h1>
            <p>At Pratibha IT Solution, we are a passionate team committed to innovation and technological excellence. Join us to work on groundbreaking projects, enhance your skills, and make a meaningful impact. Whether you’re an industry expert or beginning your career, we provide a nurturing and collaborative space for growth. Become a part of a team that’s shaping the future of technology!</p>
            <button type="button" class="btn btn-primary">Apply Now</button>
          </div>
        </div>

        <div className='col-md-6 col-12 container text-center my-4'>
          <img src={joining} alt="loading..."  className='col-10 rounded'/>
        </div>
      </section>


      <section class="common-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="category-title text-center py-0 py-md-5 mb-3 catgory-heading">
                Explore Job Openings
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                <div class="fileds-cards-one d-flex" style={{alignItems:"stretch"}}>
                  <div class="inner-field-one d-flex flex-column" style={{flexGrow:"1"}}>
                    <h4 class="mb-0 fw-bold">Marketing Manager</h4>
                    <p class="mb-0 full-time">Full time</p>
                    <p class="pt-3 job-des">
                      The Marketing Manager will lead brand expansion by executing strategic campaigns across digital, social, and content platforms while managing and guiding the marketing team.
                    </p>
              
                  </div>
                  <div class="image-container ms-3">
                    <img src={marketing} alt="Marketing Manager" class="img-fluid" style={{maxWidth:"100px"}}/>
                  </div>
                </div>
                <div class="filed-cards-btn text-center mb-3">
                  <button class="btn btn-primary fileds-cards mt-3 common-btn" style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>
                    Know more...
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4">
              <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                <div class="fileds-cards-one d-flex" style={{alignItems:"stretch"}}>
                  <div class="inner-field-one d-flex flex-column" style={{flexGrow:"1"}}>
                    <h4 class="mb-0 fw-bold">SEO Executive</h4>
                    <p class="mb-0 full-time">Full time</p>
                    <p class="pt-3 job-des">
                      The SEO Executive will enhance website visibility, boost search rankings, and track performance. Key responsibilities include conducting keyword research and optimizing content.
                    </p>
            
                  </div>
                  <div class="image-container ms-3">
                    <img src={seo_execution} alt="SEO Executive" class="img-fluid" style={{maxWidth:"100px"}}/>
                  </div>
                </div>
                  <div class="filed-cards-btn text-center mb-3">
                  <button class="btn btn-primary fileds-cards mt-3 common-btn" style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>
                    Know more...
                  </button>
                </div>
              </div>
            </div>
            
            

            <div class="col-lg-4 mb-4">
              <div class="back-content-filled d-flex flex-column" style={{height:"100%"}}>
                <div class="fileds-cards-one d-flex" style={{alignItems:"stretch"}}>
                  <div class="inner-field-one d-flex flex-column" style={{flexGrow:"1"}}>
                    <h4 class="mb-0 fw-bold">iOS Developer</h4>
                    <p class="mb-0 full-time">Full time</p>
                    <p class="pt-3 job-des">
                      The iOS Developer will be responsible for designing, developing, and maintaining iOS applications, requiring proficiency in Swift, Objective-C, and Apple's development framework.
                    </p>
                
                  </div>
                  <div class="image-container ms-3">
                    <img src={ios_developer} alt="iOS Developer" class="img-fluid" style={{maxWidth:"100px"}}/>
                  </div>
                </div>
                <div class="filed-cards-btn text-center mb-3">
                  <button class="btn btn-primary fileds-cards mt-3 common-btn" style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>
                    Know more...
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
              <div class="col-lg-12">
                <div class="category-title text-center py-4 catgory-heading">
                  <button class="btn btn-primary common-btn fileds-card-bottom" style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>
                      View More Jobs
                  </button>
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
