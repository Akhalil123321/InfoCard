import React from 'react'
import Message from '../images/message.png'
export default function MainContent(){
    return(
        <div className='main-container'>
            <h1>Ahmed Khalil</h1>
            <h3>Frontend developer</h3>
            <h4>Ahmedkhalil.website</h4>
            <nav className='container-nav'>
                <img src={Message} alt='email'/>
                <p>Email</p>
            </nav>
            <div className='main-text'>
                <h3 className='About'>About</h3>
                <p>
                I’m a front-end web developer. Seeking a challenging 
                opportunity in a reputable company where my skills, 
                experience, and academic background can be implemented, 
                utilized and professionally developed. And take the 
                company to advanced levels during my position.
                </p>
                <h3 className='Interested'>Skills</h3>
                <ul className='Interested-p'>
                <li>Problem web Searching </li>
                <li>Creativity</li>
                <li>Organization</li>
                <li>Self-learning</li>
                <li>Photo editing on photoshop</li>
                <li>Flexibility</li>
                <li>fast typing</li>
                <li>can use git and github</li>
                </ul>
            </div>
        </div>
    )
}