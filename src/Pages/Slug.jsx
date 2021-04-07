import React from 'react'
import { useParams } from 'react-router-dom'

export default function Slug() {
    const number =useParams(); 
    const a=number
    console.log(number);
    return (
        <div>
            This is a slug page with number {a.slug}
        </div>
    )
}
