import React from 'react'

import {nav,footer} from './Home.jsx';
import job_tittle from '../assets/job_tittle.png'
import exprience from '../assets/exprience.jpg'
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
                <button class="btn btn-primary fileds-cards-new common-btn" id="search-job">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='my-4'>
          <div className='col-md-10 col-12 mx-auto'>
            <div>
              <h1 className='text-uppercase fw-bold text-center'>category</h1>
            </div>

            <div className='my-2 row'>
              <div className='col-3 px-2'>
                  <div className='m-1 border rounded row'>
                    <div className='col-8 d-flex p-2 row'>
                      <p className='mx-auto my-auto'>Web Developer</p>
                      <p className='mx-auto my-auto'>10+ Availability</p>
                    </div>
                    <div className='col-4 d-flex p-2'>
                      <img src="https://www.ameotech.com/images/web-developer-icon.png" alt="" className='col-6 my-auto ms-auto'/>
                    </div>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div> 
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
              <div className='col-3 px-2'>
                  <div className='m-1 border'>
                      <h1>werwetwre</h1>
                  </div>
              </div>
            </div>
          </div>
      </section> */}

    </>
  )
}
