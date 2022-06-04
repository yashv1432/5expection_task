import React, { useEffect, useState } from 'react'
import './App.css';
import NewForm from './Component/NewForm';

const App = () => {

   const getFormValues =()=>{
      const storedValues = localStorage.getItem('form')
      if(!storedValues)
      {
        return [{
            img: "",
            title: "",
            description: "",
            city: "",
            date: "",
            price: ""
         }]
      }
      return JSON.parse(storedValues)
   }

   const [flag,setFlag] = useState('false')
   const [mark,setMark] = useState('false')
   const [formValues, setFormValues] = useState(getFormValues)

   useEffect(()=>{
      localStorage.setItem('form',JSON.stringify(formValues))
   },[formValues])

   
   let handleChange = (i, e) => {
      
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
   }

   let addFormFields = (event) => {
      setMark('true')
      event.preventDefault();      
      setFormValues([...formValues, { img: "", title: "", description: "", city: "", date: "", price: "" }])
   }

   // let removeFormFields = (i) => {
   //    let newFormValues = [...formValues];
   //    newFormValues.splice(i, 1);
   //    setFormValues(newFormValues)
   // }
   
   let handleSubmit = (event) => {
     setFlag('true')
     alert(JSON.stringify(formValues));
      event.preventDefault();
      
   }

   

   return (
      <>
         <form onSubmit={handleSubmit}  >
            {formValues.map((element, index) => (
               <div className="form-inline" key={index}>
                  <div className='container mt-4'>
                     <p className='text-dark h5'>Adding multiple rows</p>
                  </div>
                  <div className='container border border-container'>
                     <div className='row mt-3' style={{ marginLeft: '1em' }}>
                        <div className='col-lg-10 col-sm-12 border border-container'>
                           <div className='row'>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='file' name="img" value={element.img} onChange={e => handleChange(index, e)} className='border-img pt-4' placeholder='Image' style={{ width: '6.5vw', height: "5vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="title" value={element.title} onChange={e => handleChange(index, e)} placeholder='Title' className='mt-4 border-container' style={{ width: '11vw', height: "2vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="description" value={element.description} onChange={e => handleChange(index, e)} placeholder='Description' className='mt-4 border-container' style={{ width: '13vw', height: "2vw" }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="city" value={element.city} onChange={e => handleChange(index, e)} placeholder='City' className='mt-4 border-container' style={{ width: '5vw', height: "2vw", marginLeft: '2em' }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='text' name="price" value={element.price} onChange={e => handleChange(index, e)} placeholder='Price' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                              </div>
                              <div className='col-lg-2 col-sm-12'>
                                 <input type='date' name="date" value={element.date} onChange={e => handleChange(index, e)} placeholder='Date' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                              </div>
                           </div>
                           
                        </div>
                        <div className='col-lg-1 col-sm-12'>
                           <input type="submit" onClick={() => addFormFields()} className='plus border bg-white border-container mt-4' /> 
                        </div>
                     {  (mark==='false') ? <></> : <NewForm oldFormData={formValues}/>}
                        {/* <div className='row pt-3'>
                           <div className='col-lg-10 col-sm-12 border border-container'>
                              <div className='row'>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='file' className='border-img pt-4' placeholder='Image' style={{ width: '6.5vw', height: "5vw" }} />
                                 </div>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='text' placeholder='Title'  className='mt-4 border-container' style={{ width: '11vw', height: "2vw" }} />
                                 </div>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='text' placeholder='Description' className='mt-4 border-container' style={{ width: '13vw', height: "2vw" }} />
                                 </div>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='text' placeholder='City' className='mt-4 border-container' style={{ width: '5vw', height: "2vw", marginLeft: '2em' }} />
                                 </div>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='text' placeholder='Price' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                                 </div>
                                 <div className='col-lg-2 col-sm-12'>
                                    <input type='date' placeholder='Date' className='mt-4 border-container' style={{ width: '8vw', height: "2vw", marginLeft: '-2em' }} />
                                 </div>
                              </div>
                           </div>

                           {
                              index ?
                                 <div className='col-lg-1 col-sm-12'>
                                    <button className='minus border bg-white border-container mt-4' onClick={() => removeFormFields(index)}>Remove</button>
                                 </div>
                                 : null
                           }
                        </div> */}
                        
                        <div className='btn pb-4 pt-5' style={{ textAlign: "end" }}>
                           <button onSubmit={handleSubmit}  className='border border-btn bg-white border-container font-weight-bold'>Submit</button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </form>
         
         

         <div className='container border border-container mt-5'>
            <div className='row pt-3 pb-3'>
               <div className='col-lg-1 border-container' style={{ marginLeft: "1em" }}></div>
               <div className=' displayValues col-lg-10'>
                 {(flag === 'false') ? <></> : 
                 <p><span>{formValues[0].title}</span> <span>{formValues[0].description}</span> <span>{formValues[0].city}</span> <span>{formValues[0].price}</span> <span>{formValues[0].date}</span></p>}
                  <p>fsyjdkhfulyfgyygjhfjf</p>
               </div>
            </div>
            <div className='row pt-3 pb-3'>
               <div className='col-lg-1 border-container' style={{ marginLeft: "1em" }}></div>
               <div className='col-lg-10'>
                  <p>fsyjdkhfulyfgyygjhfjf</p>
                  <p>fsyjdkhfulyfgyygjhfjf</p>
               </div>
            </div>
         </div>

      </>
   )
}

export default App