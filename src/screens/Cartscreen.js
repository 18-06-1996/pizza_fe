import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartAction';


function Cartscreen() {
  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0)


  const dispatch = useDispatch();
  return (
    <div>
      <div className='row justify-content-center'>

        <div className='col-md-6'>
          <h3> My cart</h3>

          {cartItems.map(item => {
            return <div className='flex-container'>

              <div className='text-left m-1 w-100 '>
                <h5>{item.name} [{item.varient}]</h5>
                <h5>Price :{item.quantity} * {item.prices[0][item.varient]} ={item.price}</h5>
                <h6 style={{ display: 'inline' }}>Qantity :</h6>
                <button>
                  <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, parseInt(item.quantity)+1, item.varient))}}>inc</i>
                </button>
                <b>{item.quantity}</b>
                <button>

                  <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, parseInt(item.quantity)-1, item.varient))}}>dec</i>

                </button>
                <hr />
              </div>
              <div className='m-1 w-100'>
                <img src={item.image} alt='#' style={{ height: "80px", width: "80px" }} />
              </div>

              <div className='m-1 w-100 mt-5'>
                <i className="fa fa-trash" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}> Delete</i>
              </div>

            </div>
          })}
        </div>
        <div className='col-md-4 text-right'>
          <h2>SupTotal :{subTotal} /Rs</h2>
          <button className='add-btn'>PayNow</button>

        </div>

      </div></div>

  )
};



export default Cartscreen
