import React, {  useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import style from "./AddEmployee.module.css";
import axios from 'axios'
const EmployeeData = () => {
  const[data,setData]=useState(['']);
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

//search data due to search box

  const SearchData=(e)=>{
    let key=e.target.value;
    if(key){
      axios.get(`http://localhost:4000/search/${key}`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

    }
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
                  <div className="col d-flex justify-content-end mt-5 align-item-center">
                           <input type="text" placeholder="Search" className="form-control w-auto" onChange={SearchData} />
                     </div>   
                    <div className="col-md-12">
                            <div className="d-flex justify-content-between align-items-center my-3">
                            {/* Search box on the left */}
                            <input
                              type="text"
                              placeholder="Search"
                              className="form-control w-50"
                              onChange={SearchData}
                            />

                            {/* '+' button on the right */}
                            <NavLink to="/AddStudent">
                              <button className="btn btn-primary">+</button>
                            </NavLink>
                      </div>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                       <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                         <th scope="col">Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      { data.map((employee)=>{
                        return(<tr>
                          <td>{employee._id}</td>
                          <td>{employee.name}</td>
                           <td>{employee.email}</td>
                            <td>{employee.address}</td>
                             <td>{employee.number}</td>





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

export default EmployeeData