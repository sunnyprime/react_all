import React from 'react'
import {Link} from 'react-router-dom'

// const beautify ={color:'red',fontsize:5px}

export default function Navbar() {
    return (
        <div style={{}}>
            <Link to="/">HOME</Link><br/>
            <Link to="/counter">Counter</Link><br/>
            <Link to="/hookcounter">HOOK COUNTER</Link><br/>
            <Link to="/useeffectcounter">USEEFFECT COUNTER</Link><br/>
            <Link to="/about">ABOUT</Link><br/>
            <Link to="/slug/dd">SLUG</Link><br/>
        </div>
    )
}
