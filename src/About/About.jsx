import React, { Component } from 'react'
import stylish from './About.module.css'

export default class About extends Component {
  render() {
    return (
      <>
      <div className={` ${stylish.bigContainer } `}>
      <div className={` ${stylish.container } py-5 `}>

      <div className={`${stylish.layout}`}>
      <h1 className={`${stylish.h1About} `}>About</h1>

      <div className={`${stylish.aboutIcon} `} >
              
               <i className={`${stylish.stars} fa-solid fa-star`} ></i> 
          
          </div>
      </div>

      </div>

      
      <div className={` ${stylish.textAbout } row  `}>
          
          <div className={` ${stylish.praghraphs }  `} >
              <div className={` ${stylish.summary } col-lg-4 ml-auto  `} >
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className={` ${stylish.summary } col-lg-4 ml-auto  `} >
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
              
              
          </div>
      </div>
      </div>
      

      </>
    )
  }
}
