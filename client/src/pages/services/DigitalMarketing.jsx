import React from 'react'

import {nav,footer} from '../Home.jsx'

export default function DigitalMarketing() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))"}}>

        <div className='col-md-10 py-5 col-11 mx-auto'>
          <h1 className='fw-bold text-warning text-uppercase'>Digital Marketing Agency</h1>
          <h3>The best solutions for your business.</h3>

          <img src="https://www.ameotech.com/images/digital-hero.svg" alt="loading..." className='my-4'/>
        </div>
      </section>

      <section className='my-5 py-5'>
        <div className='col-md-10 col-12 row mx-auto'>
          <div className='col-md-7 col-11 mx-auto'>
            <h1 className='text-uppercase text-danger fw-bold'>Services and prices </h1>
            <p>We deliver a diverse range of solutions to help businesses effectively showcase and elevate their products or services in today’s competitive market</p>
          </div>

          <div className='col-md-5 col-11 mx-auto'>
            <div className='col-11 mx-auto'>
              <img src="https://www.ameotech.com/images/service-people-img.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
