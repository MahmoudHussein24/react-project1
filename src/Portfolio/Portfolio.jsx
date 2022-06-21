/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react'
import styling from "./Portfolio.module.css"

export default class Portfolio extends Component {
  render() {
    return (
      <>
      <div  className={` ${styling.portfolio} py-5 `}>
          <h1 className={` ${styling.h1portfolio} `}>PORTFOLIO</h1>
          <div className={`${styling.pIcon} `} >
              <i className={`${styling.ngma} fa-solid fa-star`} ></i> 
         </div>
      </div>
      
      
      <div className="container ">
          <div className="row gx-5 gy-5 py-5">


              <div className="col-md-4">
                  <div className={`${styling.image}`} >
                      <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>
                      <img className={`${styling.pImage}`} width={'100%'} src="https://www.routeegypt.com/start-react/assets/img/portfolio/cabin.png" alt=""  />
                  </div>
              </div>


            <div className="col-md-4">
                <div className={`${styling.image}`} >
                <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>
                    <img className={`${styling.pImage}`}  width={"100%"} src="https://www.routeegypt.com/start-react/assets/img/portfolio/cake.png" alt="" />
                </div>
            </div>


            <div className="col-md-4">
                <div className={`${styling.image}`} >   
                <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>                 
                <img className={`${styling.pImage}`}  width={'100%'} src=" https://www.routeegypt.com/start-react/assets/img/portfolio/circus.png " alt="" />
                </div>
            </div>



            <div className="col-md-4">
                <div className={`${styling.image}`} >  
                <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>                 
                 <img className={`${styling.pImage}`}  width={'100%'} src="https://www.routeegypt.com/start-react/assets/img/portfolio/game.png" alt="" />
                </div>
            </div>


            <div className="col-md-4">
                <div className={`${styling.image}`} >  
                <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>                 
                <img className={`${styling.pImage}`}  width={'100%'} src="https://www.routeegypt.com/start-react/assets/img/portfolio/safe.png" alt="" />
                </div>
            </div>



            <div className="col-md-4">
                <div className={`${styling.image}`} >  
                <div className={`${styling.overlay}`}>
                       <i className=" h2 text-light fa-solid fa-plus "></i>
                      </div>                  
                <img className={`${styling.pImage}`}  width={'100%'} src="https://www.routeegypt.com/start-react/assets/img/portfolio/submarine.png" alt="" />
                </div>
            </div>

          </div>
      </div>
      
      
      
      </>
    )
  }
}
