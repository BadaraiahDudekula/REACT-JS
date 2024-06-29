import React, { useState } from 'react'

function Form(props) {
  const [product,setProduct]=useState(props.data)

  let changeFormData=(event)=>{
  const {name,value}=event.target
  setProduct({...product,[name]:value })
  }


  return (
    <div className='form-overlay'>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control mt-2" type='text' value={product.name} onChange={changeFormData} name='name'placeholder='Enter product name'></input>
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input className="form-control mt-2"   type='number' name='price' placeholder='Enter price'
          value={product.price} onChange={changeFormData}
          ></input>
        </div>

        <div className="form-group">
        <label>Category:</label>
          <select className="form-control mt-2" name='category'
           value={product.category} onChange={changeFormData} >

            <option value='-1'> </option>
            <option value={'Mobile'}>mobiles</option>
            <option value={'Laptop'}>laptops</option>
            <option value={'tv'}>tv's</option>
            <option value={'fans'}>fans</option>

          </select>
        </div>
        <button className="btn btn-primary float-end" onClick={(e)=>{
          e.preventDefault()
          props.add(product)

        }}
        >Send</button>
        <button className="btn btn-danger float-end" onClick={(e)=>{e.preventDefault(); props.closeForm()}}>Cancel</button>

       
      </form>
        
    </div>
  )
}

export default Form