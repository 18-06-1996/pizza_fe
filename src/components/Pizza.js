import React ,{useState}from 'react'
// import pizzas from '../pizzadata'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'

export default function  Pizza({pizza}){

    const [quantity,setquantity]= useState("")
    const [varient,setVarient]= useState("small")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  function addtocart(){
dispatch(addToCart(pizza,quantity,varient))
  }

  return (
    <div style={{margin:'30px'}} className=' shadow-lg p-3 mb-5 bg-white rounded'>
     <div onClick={handleShow}>
     <h3>{pizza.name}</h3>
      <img src={pizza.image}alt='#' className='img-fluid' style={{height:'150px' ,width:'150px'}}/>

     </div>
      <div className='flex-container'>
 
<div className='w-100 m-1'>

    <p>varients</p>
    <select className='form-control' value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
        {pizza.varients.map((varient)=>{
            return <option value={varient}>{varient}</option>
        })}
    </select>

</div>
<div  className='w-100 m-1'>
    <p>Quantity</p>

    <select  className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
        {[...Array(11).keys()].map((x , i)=>{

            return <option value={i}>{i} </option>
        })}
    </select>
    </div>
</div>

<div className='flex-container'>

        <div className='m-1 w-100'>
<h5 style={{marginTop:'1px'}}>Price : {pizza.prices[0][varient]  * quantity} Rs/-</h5>
        </div>

        <div className='m-1 w-100'>
<button className='add-btn' onClick={addtocart}>Add To Cart</button>
        </div>

</div>
<Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={pizza.image} alt='#' className='img-fluid' style={{height:'300px'}}/>
        <p style={{marginTop:'2px'}}>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='add-btn' onClick={handleClose}>close</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}


