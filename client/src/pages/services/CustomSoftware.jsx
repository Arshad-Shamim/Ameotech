import React from 'react'

import {nav,footer} from '../Home.jsx';
import client from '../../assets/client.jpg'
import '../../cascading/services.css'

export default function CustomSoftware() {
  return (
    <>
      <section>
        {nav()}
      </section>

      <section>
            <div id="section2_custom_software" className='container-fluid row p-md-0 m-0 py-4'>
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
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name </label>
                                <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Work Email </label>
                                <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="skypeid" class="form-label">Skype ID</label>
                                <input type="text" class="form-control" id="skypid"/>
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

        <section className='container-fluid row' style={{background:"linear-gradient(90deg, rgb(66, 225, 214), rgb(29, 48, 130))",minHeight:"350px"}}>
            <div className='col-md-6 col-12 d-flex py-4' style={{minHeight:"350px"}}>
                <div className='col-11 border mx-auto my-auto  py-4 ps-3 rounded text-white border-2'>
                    <div className='col-10 py-4'>
                        <h4 className='border-bottom fw-bold'>01.Professional Web Development</h4>
                        <h4 className='border-bottom fw-bold'>02.Mobile-First Web Development</h4>
                        <h4 className='border-bottom fw-bold'>03.Performance Optimization</h4>
                        <h4 className='border-bottom fw-bold'>04.Web Apps & WPA</h4>
                        <h4 className='border-bottom fw-bold'>05.Responsive Web Design</h4>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-12 d-flex'>
                <div className='col-10 col-md-11  my-md-4 pt-md-3 text-white mx-md-0 mx-auto'>
                    <h2 className='fw-bold'>Mobile App Development</h2>
                    <p>At Pratibha IT Solution, we craft custom iOS and apps that offer seamless, intuitive experiences. From concept to launch, we deliver scalable, high-performance solutions tailored to your business goals.</p>
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
                                <h4>1000+</h4>
                                <p>Successfully Delivered Software Projects.</p>
                            </div>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="number-count text-center">
                                <h4>97%</h4>
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

        <section>
          {footer()}
        </section>
    </>
  )
}
