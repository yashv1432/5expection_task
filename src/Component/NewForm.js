import React from 'react'

function NewForm(props) {
     
  return (
    <div>
      <form  >
          <div className='row mt-3' style={{ marginLeft: '1em' }}>
                        <div className='col-lg-10 col-sm-12 border border-container'>
                           <div className='row'>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='file' name="img"   className='border-img pt-4' placeholder='Image' style={{ width: '6.5vw', height: "5vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="title" value={props.oldFormData[0].title} placeholder='Title' className='mt-4 border-container' style={{ width: '11vw', height: "2vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="description" value={props.oldFormData[0].description} placeholder='Description' className='mt-4 border-container' style={{ width: '13vw', height: "2vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="city" value={props.oldFormData[0].city} placeholder='City' className='mt-4 border-container' style={{ width: '5vw', height: "2vw", marginLeft: '2em' }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="price" value={props.oldFormData[0].price} placeholder='Price' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='date' name="date" value={props.oldFormData[0].date} placeholder='Date' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                              </div>
                           </div>
                           
                        </div>
                     </div> 
         </form>
    </div>
  )
}

export default NewForm
