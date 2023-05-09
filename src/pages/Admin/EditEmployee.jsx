import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editEmployeeByID, getEmployeeByID } from '../../api/httprequests';

const EditEmployee = () => {
  const{id} = useParams();
  const navigate = useNavigate();
  const[employee,setEmployee] = useState([]);
  useEffect(()=>{
    getEmployeeByID(id).then(res=>{
      console.log(res);
      setEmployee(res);
    })
  },[id]);
  function handleSubmit(){
    editEmployeeByID(id,employee);
    navigate('/admin/employees');
  }
  function handleChange(e){
    setEmployee({...employee,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input name='name' onChange={(e)=>handleChange(e)} placeholder='Employee name' value={employee.name} type='text'/>
      <input name='surname' onChange={(e)=>handleChange(e)} placeholder='Employee surname' value={employee.surname} type='text'/>
      <input name='age' onChange={(e)=>handleChange(e)} placeholder='Employee age' type='number' step='any' value={employee.age} min='0'/>
      <input name='salary' onChange={(e)=>handleChange(e)} placeholder='Employee salary' type='number' step='any' value={employee.salary} min='0'/>
      <input name='position' onChange={(e)=>handleChange(e)} placeholder='Employee position' value={employee.position} type='text'/>
      <button>Edit</button>
    </form>
  )
}

export default EditEmployee