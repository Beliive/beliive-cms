import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container taCenter'>
      <span>Beliive © {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
)
