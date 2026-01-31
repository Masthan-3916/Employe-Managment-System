import React, { useEffect, useState } from 'react'


import { NavLink } from 'react-router'
import style from "./AddEmployee.module.css";
import axios from 'axios'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
const DeleteEmployee= () => {
  const[data,setData]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/employee")
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // empty dependency array => run only on mount

  const Deletedata=(sid)=>{
    alert(sid);

    axios.delete(`http://localhost:4000/employee/${sid}`)
      .then(() => {
       alert("data delete sucess")
      })
      .catch(error => {
        alert( error);
      });
  }

  
  return (
    <div>
  <section>
      <div className={`container text-center p-1 m-2 ${style.bg}`}>
        <div className="row justify-content-center">
          <h1>Employee Details</h1>
          <div className="col-md-6">
         
            <nav aria-label="breadcrumb" className="d-flex justify-content-center flex-wrap">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>
            </div>
        </div>
      </div>
    </section>

    {/* Table */}
            <div className="container">
              <div className="row">
                <div className='col-md-12'>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                       <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                         <th scope="col">Number</th>
                         <th  scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      { data.map((employee)=>{
                        return(<tr key={employee._id} >
                          <td>{employee._id}</td>
                          <td>{employee.name}</td>
                           <td>{employee.email}</td>
                            <td>{employee.address}</td>
                             <td>{employee.number}</td>
                             <td>
                              <button className='btn btn-danger' onClick={()=>Deletedata(employee._id)}>DeleteData</button>

                    <NavLink to={`/EditEmployee/${employee._id}`}>
                              <button className='btn btn-primary ms-2'>EDITData</button>
                    </NavLink>
                             </td>





                        </tr>
)

                      })}
                     
                    </tbody>
                  </table>
                  </div>
                </div>
              
              </div>
            </div>

    </div>
  )
}

export default DeleteEmployee