import React from 'react'
import './ProductSection.css'
import chocolateTub from '../../../assets/Chocolate Tub.jpg'
import chocolateTub2 from '../../../assets/Chocolate Tub2.jpg'
import chocolateTora from '../../../assets/Chocolate Tora.jpg'
import vanillaTora from '../../../assets/Vanilla Tora.jpg'
import vanillaTub from '../../../assets/Vanilla Tub.jpg'
import vanillaTub2 from '../../../assets/Vanilla Tub2.jpg'
import { Card } from 'react-bootstrap'

function ProductSection() {
  return (
    <div className='mt-5'>
    <div className='ProductHeader text-center '>
        <h1 className='text-white product_text'>Products</h1>
    </div>
    <div className="container mt-5 pt-4">
        <div >
        <div className='text-center'>
            <button className='choco_button'>Chocolate</button>
        </div>
        <div className='row m-0 mt-5'>
            <div className="col-md-4">
            <Card className='choco_card'>
            <Card.Img className='' src={chocolateTub} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>
            <div className="col-md-4">
            <Card className='choco_card'>
            <Card.Img className='' src={chocolateTub2} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>

            <div className="col-md-4">
            <Card className='choco_card'>
            <Card.Img className='' src={chocolateTora} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tora Tora
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div> 
        </div>
        </div>
    </div>
    <div className="container mt-5 pt-5">
        <div className='mt-5'>
        <div className='text-center'>
            <button className='vanilla_button'>Vannilla</button>
        </div>
        <div className='row m-0 mt-5'>
            <div className="col-md-4">
            <Card className='vanilla_card'>
            <Card.Img className='' src={vanillaTora} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>
            <div className="col-md-4">
            <Card className='vanilla_card'>
            <Card.Img className='' src={vanillaTub} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>

            <div className="col-md-4">
            <Card className='vanilla_card'>
            <Card.Img className='' src={vanillaTub2} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tora Tora
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div> 
        </div>
        </div>
    </div>
    <div className="container mt-5 pt-5 mb-4">
        <div className='mt-5'>
        <div className='text-center'>
            <button className='pista_button'>Pista</button>
        </div>
        <div className='row m-0 mt-5'>
            <div className="col-md-4">
            <Card className='pista_card'>
            <Card.Img className='' src={vanillaTora} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>
            <div className="col-md-4">
            <Card className='pista_card'>
            <Card.Img className='' src={vanillaTub} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tub
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div>

            <div className="col-md-4">
            <Card className='pista_card'>
            <Card.Img className='' src={vanillaTub2} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                <div>
                <Card.Text className='choco_card_textDark  m-0'>
                Chocolate Tora Tora
             </Card.Text> 
             <Card.Text className='choco_card_ltr m-0'>
                500ml
             </Card.Text>   
             </div>
             <div className='mt-2'>
             <Card.Text className='choco_card_rupee '>
             ₹00.00
             </Card.Text>  
             </div>
            </div> 
         </Card.Body>
            </Card>
            </div> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default ProductSection