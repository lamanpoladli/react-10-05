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
          <li><Link style={h1} to='/admin'>Admin Panel</Link></li>
          <li><Link style={h1} to='/'>Home</Link></li>
          <li><Link style={h1} to='/about'>About</Link></li>

        </ul>
    </div>
  )
}

export default Navbar