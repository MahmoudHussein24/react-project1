import React, { Component } from 'react'
import setDesign from './Ccontact.module.css'


export default class Contact extends Component {
  render() {
    return (
      <>

      <div className={`${setDesign.contact} `}>

      <div  className={` ${setDesign.Contact} py-5 `}>
          <h1 className={` ${setDesign.h1Contact} `}>Contact</h1>
          <div className={`${setDesign.pIcon} `} >
              <i className={`${setDesign.ngma} fa-solid fa-star`} ></i> 
         </div>
      </div>


      </div>

      <div className= {`${setDesign.form} `} >



      <form>
  <div class={`${setDesign.Input} `}>
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control p-2 " id="formGroupExampleInput" placeholder=""/>
  </div>
  <div class={`${setDesign.Input} `}>
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control p-2" id="formGroupExampleInput2" placeholder=""/>
  </div>
  <div class={`${setDesign.Input} `}>
    <label for="formGroupExampleInput">Phone Number</label>
    <input type="text" className="form-control p-2" id="formGroupExampleInput" placeholder=" "/>
  </div>
  <div class={`${setDesign.Input} `}>
    <label for="formGroupExampleInput2">Massege</label>
    <input type="text" className="form-control p-5" id="formGroupExampleInput2" placeholder=""/>
  </div>
  <button className={`${setDesign.btn} btn btn-primary  py-3 px-4 `} > Send </button>
</form>
      </div>
      
      
      
      
      
      
      
      
      
      
      </>
    )
  }
}
