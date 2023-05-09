import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postEmployee } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';
let input ={
  height:"40px",
  margin:"0px 10px",
  textAlign:"center"
}

const AddEmployee = () => {
  const[newEmployee,setNewEmployee] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    newEmployee.id = uuidv4();
    await postEmployee(newEmployee);
    navigate('/admin/employees');
  }
  function handleChange(e){
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value});
  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"670px"}}>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <input style={input} name='name' onChange={(e)=>handleChange(e)} placeholder='Employee name' type='text' required/>
      <input style={input} name='surname' onChange={(e)=>handleChange(e)} placeholder='Employee surname' type='text' required/>
      <input style={input} name='age' onChange={(e)=>handleChange(e)} placeholder='Employee age' type='number' min='0' required/>
      <input style={input} name='salary' onChange={(e)=>handleChange(e)} placeholder='Employee salary' type='number' min='0' required/>
      <input style={input} name='position' onChange={(e)=>handleChange(e)} placeholder='Employee position' type='text' required/>
      <button style={{backgroundColor:"#5A8485",height:"40px",margin:"0px 10px",color:"white"}} type='submit'>Add New Employee</button>
    </form>
    </div>
  )
}

export default AddEmployee