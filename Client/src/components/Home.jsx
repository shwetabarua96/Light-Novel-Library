import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Light Novel Bookstore Management</h1>
            <p className='hero-description'>
            Light Novel Library is a bookstore management website that enables users to browse through a wide range of Light Novels in various categories. The website also allows the system administrator to add and delete Light Novels from the database.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home