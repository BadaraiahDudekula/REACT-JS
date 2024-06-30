import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Emplisting = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate=useNavigate();

const LoadDetails = (id) =>{
   navigate("/employee/details/"+id);
}

const RemoveFunction = (id) => {

}

const LoadEdit = (id) => {

}

    useEffect(() => {
        fetch("http://localhost:8000/employee")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                empdatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>

                </div>
                <div className="card-body">

                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>

                    <table className="table  table-bordered table-striped " >
                        <thead className=" bg-dark text-white" >
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>
                                            <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-danger">Remove</a>
                                            <a onClick={()=>{LoadDetails(item.id)}} className="btn btn-primary">Details</a>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
}

export default Emplisting;