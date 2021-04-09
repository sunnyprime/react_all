import React from 'react'
import {Link} from 'react-router-dom'
import './Navbars.css'
// import {Nav,Button,Form,Navbar,NavDropdown,FormControl} from 'react-bootstrap';

export default function Navbars() {
    return (

        <div style={{}}>
            <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/counter">COUNTER</Link></li>
  <li><Link to="/hookcounter">HOOK COUNTER</Link></li>
  <li><Link to="/useeffectcounter">USEEFFECT COUNTER</Link></li>
  <li><Link to="/slug/test_number">SLUG</Link></li>
  <li><Link to="/about">ABOUT</Link></li>
  <li><Link to="/robofriend">ROBOFRIEND</Link></li>
  {/* <li><a href="#news">News</a></li> */}

</ul>

            {/* <Link to="/">HOME</Link><br/>
            <Link to="/counter">Counter</Link><br/>
            <Link to="/hookcounter">HOOK COUNTER</Link><br/>
            <Link to="/useeffectcounter">USEEFFECT COUNTER</Link><br/>
            <Link to="/about">ABOUT</Link><br/>
            <Link to="/slug/dd">SLUG</Link><br/> */}
            
 

        </div>

    )
}
