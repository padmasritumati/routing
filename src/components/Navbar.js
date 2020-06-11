import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function Navbar(){
  return (
    <div>
      <p><Link to="/about">About this website</Link></p> 
       <p><NavLink to="/discover">discover movies</NavLink></p>
       <p><NavLink to="/">home page</NavLink></p>
    </div>
  )
}