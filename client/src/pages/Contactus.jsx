import React from 'react'

import {footer, nav} from './Home.jsx'
import expretes from '../assets/expretes.webp'
import client from '../assets/client.jpg'
import '../cascading/contactus.css'
import '../cascading/Home.css'

export default function Contactus() {
  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div id="section2_contactus" className='container-fluid row p-md-0 m-0 py-4'>
                <div className='container-fluid col-md-6 col-12 text-white d-flex'>
                    <div className='col-10 mx-auto my-md-auto my-4'>
                        <h1 className='text-uppercase fs-1 fw-bold'>Kickstart Your Digital Evolution Today</h1>
                        <p>Gain Valuable Expertise from Our Business Growth Specialists.</p>

                        <div className='row my-4 col-md-8 col-12'>
                            <div className='col-6 p-2'>
                                <button type="button" class="btn btn-primary col-md-10 col-12">For Business</button>
                            </div>
                            <div className='col-6 p-2'>
                                <button type="button" class="btn btn-primary col-md-10 col-12">For career</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 col-12 text-white d-flex'>
                    <div className='col-md-9 col-10 my-auto border p-3 rounded mx-auto mx-md-0 border-2'>
                        <form>
                            <legend className='text-center fw-bold'>Submit a Proposal Request</legend>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name </label>
                                <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Work Email </label>
                                <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Budget Range</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Budget Range</option>
                                    <option value="1">$500-$1000</option>
                                    <option value="2">$1000-$5000</option>
                                    <option value="3">$5000+</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="mobileno" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" id="mobileno"/>
                            </div>
                            <div class="mb-3">
                                <label for="thoughts" class="form-label d-block">Your Thoughts</label>
                                <textarea name="" className='col-12 rounded' rows="3" id=""></textarea>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Submit</button>
                            </div>                       
                         </form>
                    </div>
                </div>
            </div>
        </section>


        <section class="seamless-section my-4">
            <div class="container" id="unstopable-section">
                <div class="row pt-4 pb-4 px-3 px-lg-5 d-flex align-items-center justify-content-center rounded-3 shadow-lg">
                        {/* <!-- Image Section --> */}
                        <div class="col-lg-5 offset-lg-0 px-4 py-3 overflow-hidden shadow-lg bg-girl d-flex justify-content-center">
                            <img class="rounded img-fluid" src={expretes} alt="unstopable-img" loading="lazy"/>
                        </div>

                        {/* <!-- Text Section --> */}
                        <div class="col-lg-7 px-4 py-3 px-lg-5 d-flex flex-column ">
                            <h3 class="display-4 fw-bold lh-1 text-body-emphasis seamless-content" id="seam-title">
                                Relentless Digital Evolution
                            </h3>
                            <p class="seam-para text-md-start text-center">
                            Achieve effortless digital transformation with expert solutions that enhance efficiency, foster innovation, and fuel growth, ensuring your business stays ahead in the digital era.</p>
                            <div class="d-grid gap-2 d-flex justify-content-center justify-content-md-start text-center mt-3">
                                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" id="expert-btn">
                                Talk to Our Experts
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        <section>
            <div>
                <h1 className='text-center fw-bold text-danger'>Our Esteemed Clients</h1>
            </div>
            <div class="container">
                <div class="col-12 p-5 text-center">
                    <img src={client} alt="brand-logos" id="brand-logo" className='img-fluid rounded'/>
                </div>
            </div>
        </section>

        <section>
            {footer()}
        </section>
    </>
  )
}
