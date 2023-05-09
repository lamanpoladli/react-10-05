import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEmployeeByID } from '../../api/httprequests';

const EmployeeDetail = () => {
  const{id} = useParams();
  const[employee,setEmployee] = useState({});
  console.log(id);
  useEffect(()=>{
    getEmployeeByID(id).then(res=>{
      setEmployee(res);
    })
  },[id]);
  return (
    <>
      <h1>Detail page of <i>{employee.name} {employee.surname}</i></h1>
      
      <ul>
        <li>Employee ID: {employee.id}</li>
        <li>Employee Name: {employee.name}</li>
        <li>Employee SurName: {employee.surname}</li>
        <li>Employee Age: {employee.age}</li>
        <li>Employee salary: {employee.salary}</li>
        <li>Employee position: {employee.position}</li>
      </ul>
      <button><Link to='/admin/employees'>Go Back</Link></button>
    </>
  )
}

export default EmployeeDetail