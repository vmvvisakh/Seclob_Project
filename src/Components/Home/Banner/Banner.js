import React from 'react'
import milmalogo from '../../../assets/Milma_logo.jpg'
import banner from '../../../assets/Banner.jpg'
import character from '../../../assets/Charecter.jpg'
import './Banner.css'

function Banner() {
  return (
    <div>
        <div className="banner-img" style={{backgroundImage: "url(" + { banner } + ")"}}>
            <div className='row m-0 overlay'>
            <div className='col-md-2'>
                <div>
                <img src={milmalogo}  alt="" className='ms-5 mt-5 frame_logo rounded-circle position-fixed' />
                </div>
                <div className=''>
                {/* <small className='text-white circle-text'>Enjoy The Real Goodness</small> */}
                </div>
            </div>
            <div className='col-md-3 offset-md-1 pt-5'>
            <img src={character} className='mt-4 pt-2' alt="" />
            </div>
            <div className="col-md-4 offset-md-1 banner_text_main ">
             <p className='Banner_text '>Celebrate Happiness <h3>with the Goodness of Milk</h3></p>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Banner