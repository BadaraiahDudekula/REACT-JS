import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, changeactive] = useState(true);
    const [validation, validationChange] = useState(false);

    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();

        const empdata = { name, email, phone, active };


        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        })
            .then((res) => {
                alert('Employee saved successfully')
                navigate('/')

            })
            .catch((err) => {
                console.log(err.message);
            })

    };
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Id</label>
                                        <input value={id} disabled="disable" className="form-control"></input>

                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={name} onMouseDown={e => validationChange(true)}  onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>

                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">

                                        <input checked={active} onChange={e => changeactive(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger" >Back</Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default EmpCreate;