import React from 'react';
import Face from '../images/Facebook Icon.png';
import Tweet from '../images/Twitter Icon.png';
import Insta from '../images/Instagram Icon.png';
import Git from '../images/GitHub Icon.png';
import Link from '../images/Linkedin Icon.png';
export default function Footer(){
return(
    <nav className='foot'>
        <img src={Face} className='face'alt='' />
        <img src={Tweet} className='tweet'alt=''/>
        <img src={Insta} className='insta'alt=''/>
        <img src={Link} className='link'alt=''/>
        <img src={Git} className='git'alt=''/>
    </nav>
)
}