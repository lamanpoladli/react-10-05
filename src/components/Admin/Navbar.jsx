import React from 'react'
import { Link } from 'react-router-dom'
let h1 ={
  color:"white",
  textDecoration:"none",
  fontSize:"25px"
}
const Navbar = () => {
  return (
    <div style={{backgroundColor:"#B4B4B3",height:"60px",padding:"20px"}}>
      <ul style={{display:"flex",gap:"30px",listStyle:"none"}}>
        <li><Link style={h1} to='/'>Main Site</Link></li>
        <li><Link style={h1} to='/admin'>Home Admin</Link></li>
        <li><Link style={h1} to='/admin/employees'>Employees</Link></li>
        <li><Link style={h1} to='/admin/add-employee'>Add New Employee</Link></li>
    </ul>
    </div>
  )
}

export default Navbar