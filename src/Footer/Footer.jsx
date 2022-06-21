import React, { Component } from 'react'
import thestyle from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <>

      <footer>

      <div className={`${thestyle.container} `}>
        <div className="row w-80 ">
          <div className='col-lg-4 mb-5 mb-lg-0 py-200' >
            <h1>LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-lg-4 mb-5 mb-lg-0 px-80' >
            <h1>AROUND THE WEB</h1>


            <div className={`${thestyle.icons} `}>
            
            <i className={`${thestyle.icon} fa-brands fa-facebook`}>
              </i> <i className={`${thestyle.icon} fa-brands fa-twitter`}>
                </i> <i className={`${thestyle.icon} fa-brands fa-linkedin`}></i>
                <i className={`${thestyle.icon} fa-brands fa-instagram`}></i>

                </div>

          </div>
          <div className='col-lg-4 mb-5 mb-lg-0' >
            <h1>ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>



</div>

      </footer>
      

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </>
    )
  }
}

