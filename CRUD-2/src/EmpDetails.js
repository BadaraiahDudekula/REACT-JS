import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({})

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
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
        <div>
            <div className="card" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h1>Employee Details</h1>
                </div>
                <div className="card-body"></div>
         
            {empdata &&
                <div>
                    <h3>The Employee ID is : {empdata.id}  </h3>
                    <h3>The Employee Name is : {empdata.name}  </h3>
                    <h3>The Employee Email is : {empdata.email}  </h3>
                    <h3>The Employee Phone is : {empdata.phone}  </h3>
                   <Link className="btn btn-danger" to="/">Back to Listing</Link>


                </div>
            }
   </div>


        </div>
    );
}

export default EmpDetails;