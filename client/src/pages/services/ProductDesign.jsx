import React from 'react'

import {nav,footer} from '../Home.jsx'
import client from "../../assets/client.jpg"

export default function ProductDesign() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section id="section1" className='container-fluid row py-4'>
            <div className='col-md-6 col-12 d-flex'>
                <div className='mx-auto my-auto col-10 text-white'>
                    <h1 className='fw-bolder'>Product Design and Concept Ideation Services</h1>
                    <p>Product Design and Concept Ideation Services help businesses transform ideas into innovative, user centered products. This includes brainstorming, concept development, user research, and creating a clear design strategy to ensure the product is functional, visually appealing, and market-ready.</p>
                </div>
            </div>

            <div className='col-md-6 col-12 d-flex'>
                <div className='mx-auto my-auto col-11'>
                    <img src="https://www.ameotech.com/images/product-hero-img.png" alt="" className='img-fluid'/>
                </div>
            </div>
      </section>

      <section className='my-4'>
        <div>
          <h1 className='text-center fw-bold text-danger'>Our Esteemed Clients</h1>
        </div>
        <div class="container">
            <div class="col-12 p-5 text-center">
              <img src={client} alt="brand-logos" id="brand-logo" className='img-fluid rounded'/>
            </div>
        </div>

        <div className='container-fluid d-flex'>
          <div className='col-md-9 col-11 mx-auto'>
              <h1 className='text-center fw-bold text-danger'>Our Ideation and Product Design Solutions</h1>
              <p>We specialize in transforming ideas into innovative products through comprehensive ideation and design
                processes. Our services cover everything from initial concept development to detailed product design,
                ensuring a seamless path from vision to creation. 
              </p>
          </div>
        </div>
      </section>


      <section className='container-fluid row' style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))",minHeight:"350px"}}>
            <div className='col-md-6 col-12 d-flex py-4' style={{minHeight:"350px"}}>
                <div className='col-11 border mx-auto my-auto  py-4 ps-3 rounded text-white border-2'>
                    <div className='col-10 py-4'>
                        <h4 className='border-bottom fw-bold'>01.Product Ideation</h4>
                        <h4 className='border-bottom fw-bold'>02.Digital Product Consulting</h4>
                        <h4 className='border-bottom fw-bold'>03.Concept Development </h4>
                        <h4 className='border-bottom fw-bold'>04.Product Design</h4>
                        <h4 className='border-bottom fw-bold'>05.UI/UX Design</h4>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-12 d-flex'>
                <div className='col-10 col-md-11  my-md-4 pt-md-3 text-white mx-md-0 mx-auto'>
                    <h2 className='fw-bold'>Product Ideation</h2>
                    <p>Product Ideation is the process of generating and refining innovative product ideas to solve user problems and meet market needs. It focuses on brainstorming, concept development, and validation.</p>
                </div>
            </div>
        </section>

        <section>
            <div class="container customize-box py-5 my-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between flex-wrap">
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>17+</h4>
                                <p>Years in Custom Software Development.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>2000+</h4>
                                <p>Successfully Delivered Software Projects.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>95%</h4>
                                <p>Customer Retention Rate Metrics..</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center heading-text mt-5">
                        <a href="/contactus" class="btn rounded-pill">Discuss Your Design Requirements</a>
                    </div>
                </div>
            </div>
        </section>

        {footer()}
    </>
  )
}
