import React, { Component } from 'react'
import design from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className={`${design.home}  w-100 `}>

          <div className={`${design.center}`}>
          <img src="https://www.routeegypt.com/start-react/assets/img/avataaars.svg" alt="" width={'320px'}  />
          <h1 className={`${design.h1Header} `}>START REACT</h1>
          
          <div className={`${design.homeIcon} `} >
              
               <i className={`${design.star} fa-solid fa-star`} ></i> 
          
          </div>
          <p className={`${design.pHeader}`}>Graphic Artist - Web Designer - Illustrator</p>
          </div>

          

        

      </div>
      
      
      
      
      
      
      </>
    )
  }
}
