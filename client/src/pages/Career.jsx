import React from 'react'

import {nav,footer} from './Home.jsx';
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
    </>
  )
}
