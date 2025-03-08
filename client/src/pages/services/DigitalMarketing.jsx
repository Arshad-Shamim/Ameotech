import React from 'react'

import {nav,footer} from '../Home.jsx'
import discussion from '../../assets/discussion.jpg'
import discussion2 from '../../assets/discussion2.jpg'
import fashion from '../../assets/fashion.png'
import one from '../../assets/one2.png'
import two from '../../assets/two2.png'
import three from '../../assets/three2.png'

export default function DigitalMarketing() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>

        <div className='col-md-10 py-5 col-11 mx-auto'>
          <h1 className='fw-bold text-warning text-uppercase'>Digital Marketing Agency</h1>
          <h3>Top Strategies to Elevate Your Business.</h3>

          <img src={discussion} alt="loading..." className='my-4 rounded' style={{height:"70vh",width:"90vw"}}/>
        </div>
      </section>

      <section className='my-5 py-5'>
        <div className='col-md-10 col-12 row mx-auto'>
          <div className='col-md-7 col-11 mx-auto'>
            <h1 className='text-uppercase text-danger fw-bold'>Services and prices </h1>
            <p>We provide a variety of solutions to help businesses successfully present and enhance their products or services in the modern competitive landscape.</p>
          </div>

          <div className='col-md-5 col-11 mx-auto'>
            <div className='col-11 mx-auto'>
              <img src={discussion2} alt="" className='rounded'/>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-section common-padding" style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="d-flex justify-content-between">
                <div class="num-image">
                  <img src={one} loading="lazy"/>
                </div>
            
                <div class="col-md-8 ms-2 text-white">
                  <h2 class="carer-headings mb-3 ms-0" id="branding-dev">
                    Branding Development
                  </h2>
                  <p class="mb-4 info-para" id="carer-para-five">
                    Brand development focuses on crafting a distinct identity for your business, encompassing logo design, core values, messaging, and visual aesthetics.
                  </p>
                  {/* <!-- Hidden content initially --> */}
                  <p class="mb-4 info-para additional-content d-none" id="additional-content">
                    We help craft a compelling and consistent brand that resonates with your
                    audience, builds trust, and drives long-term success. Contact us to learn
                    more about our approach and services tailored to your needs.
                  </p>
                  <div class="d-flex align-items-start mt-3" id="price-box-one">
                    <h4 id="price-first">From $300</h4>
                    <button class="btn btn-primary  see-more-btn ms-3" id="toggle-button">
                      See More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-5">
              <div class="d-flex justify-content-between">
                <div class="num-image">
                  <img src={two}/>
                </div>
                <div class="col-md-8 ms-2 text-white">
                  <h2 class="carer-headings mb-3">Creative Services</h2>
                  <p class="mb-4 info-para" id="carer-para-one">
                    Our creative solutions aim to transform your ideas into reality through cutting-edge design, compelling content, and engaging visual storytelling.                  </p>
                  {/* <!-- Hidden content initially --> */}
                  <p class="mb-4 info-para additional-content d-none" id="additional-content-two">
                    From graphic design to video production, we help craft engaging and impactful materials that resonate with your audience. Contact us to explore how our services can elevate your brand's presence.
                  </p>
                  <div class="d-flex align-items-start mt-3" id="price-box-two">
                    <h4 id="price-two">From $300</h4>
                    <button class="btn btn-primary  see-more-btn ms-2" id="toggle-button-two">
                      See More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-5">
              <div class="d-flex justify-content-between">
                <div class="num-image">
                  <img src={three}/>

                  {/* <!-- <img class="me-5" id="margin-add" src="./images/digital-marketing-team.svg"
                    alt="digital-marketing-team" /> --> */}
                </div>
                <div class="col-md-8 ms-2 text-white">
                  <h2 class="carer-headings mb-3">Digital Marketing</h2>
                  <p class="mb-3 info-para" id="carer-para-two">
                    Our online marketing services enable you to connect with and engage your target audience effectively. Using strategies such as SEO, social media marketing, PPC advertising, and email campaigns, we enhance traffic, increase conversions, and strengthen brand visibility to help your business thrive in the digital world.                  </p>
                  {/* <!-- Additional content hidden initially --> */}
                  <div id="additional-content-three" class="d-none">
                    <h4>
                      SEO
                      <span id="seo-inner-one">(Search Engine Optimization)</span>
                    </h4>
                    <p id="carer-para-four" class="info-para">
                      SEO helps improve your website’s visibility on search engines like Google. By optimizing your site’s structure, content, and keywords, we help you rank higher in search results, attract organic traffic, and reach more potential customers.
                    </p>
                    <h4>
                      SMM <span id="seo-inner-two">(Social Media Marketing)</span>
                    </h4>
                    <p id="carer-para-three" class="mb-4 info-para">
                      SMM involves leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your brand, engage with your audience, and drive traffic. We create targeted campaigns that build your online presence, increase followers, and foster customer loyalty.
                    </p>
                  </div>
                  <div class="d-flex align-items-start mt-3" id="price-box-three">
                    <h4 id="price-three">From $300</h4>
                    <button class="btn btn-primary  see-more-btn  ms-3" id="toggle-button-three">
                      See More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="common-padding">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12">
          <div class="text-center text-md-start">
            <h2 class="carer-headings mb-3">Cases</h2>
          </div>
        </div>
      
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 text-center text-lg-start">
            <img src={fashion} alt="fashion-girl-new" id="girl-digital"/>
          </div>
          <div class="col-md-6">
            <h3 class="display-4 fw-bold lh-1 text-body-emphasis digital-text" id="fashion-house-heading">
              Fashion Brand &amp; Online Store Turning Clicks into Customers
            </h3>
            <p class="seam-para digital-text text-center text-md-start">
              <strong class="portfolio-subtitle">Challenge:</strong><br/>
              Although the website received a high volume of traffic, the client struggled with low conversion rates. Despite a consistent flow of visitors, these interactions weren’t converting into sales, resulting in revenue falling short of expectations.</p>
            <p class="seam-para digital-text text-center text-md-start">
              <strong class="portfolio-subtitle">Solutions:</strong><br/>
              We enhanced the website’s user experience by streamlining navigation and optimizing mobile responsiveness. Through A/B testing, stronger calls-to-action, and strategic advertising, we re-engaged visitors. Additionally, product pages were improved with persuasive descriptions, high-quality images, and customer reviews to increase conversions.            </p>
            <p class="seam-para digital-text text-center text-md-start">
              <strong class="portfolio-subtitle">Results:</strong><br/>
              As a result, conversion rates rose by 35% within two months, leading to a 50% increase in revenue. Enhanced user experience and strategic marketing successfully transformed website traffic into loyal, returning customers.            </p>
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
