import React from 'react'
import img1 from './images/footer.png'
function Footer() {
  return (
    <div className="footer">
    
       <div className="img-contt">
            <img src={img1} alt="" />
        </div>
        <div className="foot-para">
            <p>Designed using Figma</p>
            <p>Hosted on <span className='bg11'>@ GitHub Pages</span></p>
        </div>
       </div>

  )
}

export default Footer
