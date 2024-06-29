import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

import {getData ,deleteData ,postData,putData} from "./api";


function App() {
  const [products,setProducts]=useState([])
  const[openForm,setopenForm] = useState(false)
  const[edit,setEdit] = useState(false)
  const[initialForm,setinitialForm] = useState({name:'',price:'',category:''})
  useEffect(
    ()=>{
      getProducts();
    },[]
  )
  let getProducts=async()=>{
    let res= await getData();
    setProducts(res.data);
    
  }
  let deleteProduct=async(id)=>{
     await deleteData(id);
    getProducts();
  }

  let addProduct=async(product)=>{
    let data={
      name:product.name,
      price:product.price,
      category:product.category
    }
    setopenForm(false)
    if(edit)
      await putData(product.id,data);
    else
    await postData(data);
  
   getProducts();
   setopenForm(false)
 }

 let editProduct=async(data)=>{
  setinitialForm(data)
 setopenForm(true)
 setEdit(true)
 
}

  let showForm=()=>{
    setopenForm(true)
    setopenForm(true)
  }
  let closeForm=()=>{
    setopenForm(false)
  }
  return (
  <div className="wrapper m-5 w-50">
    <h2 className="text-primary">CRUD OPERATIONS</h2>
    <button className="btn-btn-primary" onClick={()=>{
      showForm()
    }}>Add Product</button>
    <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
    {
      openForm && <Form closeForm={closeForm}  data={initialForm} add={addProduct}></Form>
    }
  </div>
  );
}

export default App;
