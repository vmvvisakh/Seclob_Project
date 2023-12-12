import React from 'react'
import { Card } from 'react-bootstrap'
import propic from '../../../assets/dummy_propic.png'
import './DashBoardContent.css'
import { AiFillDelete, AiFillEdit, AiOutlineArrowRight, AiOutlineDatabase, AiOutlineFileAdd, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'

function DashBoardContent() {

        const handleClick = () => {
          console.log("clicked");
        }

  return (
    <div className='mt-5'>
      <div className='row'>
        <div className='col-md-12 '>
        <h2 className='text-primary'>DashBoard</h2>
        <p>lorem ipsum color dot lorem ipsum.</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 mb-3" onClick={handleClick}>
        <Card className='border-0'>
      <Card.Body>
        <div className='d-flex '>
          <AiOutlineUser size={25} className='text-danger me-2' />
          <h6 className='mt-1'>Users</h6>
        </div>

        <div className='mt-2 d-flex justify-content-between'>
          <div className='d-flex'>
          <div className='me-4'>
            <AiOutlineFileAdd className='me-2 ' />
            <small className=''>Add</small>
          </div>
          <div>
          <AiFillEdit className='me-2 ' />
            <small className=''>Edit</small>
          </div>
          </div>
          <div>
          <AiOutlineArrowRight />
          </div>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 mb-3">
        <Card className='border-0'>
      <Card.Body>
        <div className='d-flex'>
          <AiOutlineDatabase size={25} className='text-danger me-2' />
          <h6 className=' mt-1'>Data</h6>
        </div>

        <div className='mt-2 d-flex justify-content-between'>
          <div className='d-flex'>
          <div className='me-4'>
            <AiOutlineFileAdd className='me-2 ' />
            <small className=''>Add</small>
          </div>
          <div>
          <AiFillEdit className='me-2 ' />
            <small className=''>Edit</small>
          </div>
          </div>
          <div>
          <AiOutlineArrowRight />
          </div>
        </div>
      </Card.Body>
    </Card>
        </div>

        <div className="col-md-4 mb-3">
        <Card className='border-0' >
      <Card.Body>
        <div className='d-flex'>
          <AiOutlineUpload size={25} className='text-danger me-2' />
          <h6 className=' mt-1'>Bulk upload</h6>
        </div>

        <div className='mt-2 d-flex justify-content-between'>
          
          <div className='me-4'>
            <small className=''>CSV / EXCEL</small>
          </div>
       
          <div>
          <AiOutlineArrowRight />
          </div>
        </div>
      </Card.Body>
    </Card>
        </div>

      </div>
      <div className="row mt-2">
      <div className="col-lg-6 mb-4">
      <Card className='border-0'>
      <Card.Body>
        <h6>Users</h6>
        <div className='d-flex justify-content-between mt-3 border-bottom pb-3'>
          <div className='d-flex'>
          <div className='me-3'>
            <img src={propic} alt="" className='rounded-circle user_dp' />
          </div>
          <div>
            <p className='fw-normal m-0 p-0 '>User Name</p>
            <small className=''>Added:20 JUN 2023</small>
          </div>
          </div>
          <div>
            <AiFillDelete className='me-1' />
            <small>Remove</small>
          </div>
        </div>

        <div className='d-flex justify-content-between mt-3 border-bottom pb-3'>
          <div className='d-flex'>
          <div className='me-3'>
            <img src={propic} alt="" className='rounded-circle user_dp' />
          </div>
          <div>
            <p className='fw-normal m-0 p-0 '>User Name</p>
            <small className=''>Added:20 JUN 2023</small>
          </div>
          </div>
          <div>
            <AiFillDelete className='me-1' />
            <small>Remove</small>
          </div>
        
        </div>

        <div className='d-flex justify-content-between mt-3 border-bottom pb-3'>
          <div className='d-flex'>
          <div className='me-3'>
            <img src={propic} alt="" className='rounded-circle user_dp' />
          </div>
          <div>
            <p className='fw-normal m-0 p-0 '>User Name</p>
            <small className=''>Added:20 JUN 2023</small>
          </div>
          </div>
          <div>
            <AiFillDelete className='me-1' />
            <small>Remove</small>
          </div>
        
        </div>

        <div className='d-flex justify-content-between mt-3'>
          <div className='d-flex'>
          <div className='me-3'>
            <img src={propic} alt="" className='rounded-circle user_dp' />
          </div>
          <div>
            <p className='fw-normal m-0 p-0 '>User Name</p>
            <small className=''>Added:20 JUN 2023</small>
          </div>
          </div>
          <div>
            <AiFillDelete className='me-1' />
            <small>Remove</small>
          </div>
        
        </div>
      </Card.Body>
      <Card.Footer className='mt-2 bg-white'>
        <div className='d-flex'>
          <div className='me-4'>
            <AiOutlineFileAdd className='me-2 ' />
            <small className=''>Add</small>
          </div>
          <div>
          <AiFillEdit className='me-2 ' />
            <small className=''>Edit</small>
          </div>
          </div>
        </Card.Footer>
    </Card>
      </div>

      <div className="col-lg-6">
      <Card className='border-0'>
      <Card.Body>
        <h6>Data</h6>
        <div className='d-flex justify-content-between mt-3 border-bottom pb-3'>
        
          <div>
            <small className='text-danger'>Medical</small>
            <p className='fw-normal m-0 p-0 '>Lorem ipsum color, lorem ipsum color.</p>
            <small className=''>Added:20 JUN 2023</small>
          </div>
      
          <div>
            <AiFillDelete className='me-1' />
            <small>Remove</small>
          </div>
        </div>

        <div className='d-flex justify-content-between mt-3 border-bottom pb-3'>
        
        <div>
          <small className='text-danger'>Education</small>
          <p className='fw-normal m-0 p-0 '>Lorem ipsum color, lorem ipsum color.</p>
          <small className=''>Added:20 JUN 2023</small>
        </div>
    
        <div>
          <AiFillDelete className='me-1' />
          <small>Remove</small>
        </div>
      </div>

      <div className='d-flex justify-content-between mt-3 '>
        
        <div>
          <small className='text-danger'>Medical</small>
          <p className='fw-normal m-0 p-0 '>Lorem ipsum color, lorem ipsum color.</p>
          <small className=''>Added:20 JUN 2023</small>
        </div>
    
        <div>
          <AiFillDelete className='me-1' />
          <small>Remove</small>
        </div>
      </div>

      </Card.Body>
      <Card.Footer className='mt-4 bg-white'>
        <div className='d-flex'>
          <div className='me-4'>
            <AiOutlineFileAdd className='me-2 ' />
            <small className=''>Add</small>
          </div>
          <div>
          <AiFillEdit className='me-2 ' />
            <small className=''>Edit</small>
          </div>
          </div>
        </Card.Footer>
       </Card>
        </div>
      </div>
    </div>
  )
}

export default DashBoardContent