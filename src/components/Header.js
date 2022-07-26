import React from 'react'
import Ahmed from '../images/ahmed.png'
export default function Header(){
    return(
        <nav>
            <img src={Ahmed} className='my-image' alt='myPicture'/>
        </nav>
    )
}