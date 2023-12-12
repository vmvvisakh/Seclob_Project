import React from 'react'
import './Section.css'
import milkshake from '../../../assets/milkshake.jpg'

function Section() {
  return (
    <div className='container'>
    <div className="row m-0 mt-5">
        <div className="col-md-5 ">
            <img src={milkshake} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6 ">
            <p className='section_text mt-5 pt-5'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            </p>
        </div>
    </div>
    </div>
  )
}

export default Section