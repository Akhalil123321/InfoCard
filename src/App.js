import React from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './style.css'
export default function App(){
return(
    <div className='all-page'>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
)}