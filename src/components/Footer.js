import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/beliive.br/" style={{textDecoration:"none"}} target="_blank">@beliive.br</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className='Footer'>
    <div className='container taCenter'>
      <span>Beliive © {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
  </div>
)
