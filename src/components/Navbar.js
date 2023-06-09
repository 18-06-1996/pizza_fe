import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions/userAction'

const Navbar = () => {

    const cartstate= useSelector(state=>state.cartReducer)
    const userstate=useSelector(state=>state.loginUserReducer)
    const dispatch=useDispatch();
    const {currentUser}=userstate
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand" href="/">PIZZA CORNER</a>
                <button className="navbar-toggler" type="button" 
                data-toggle="collapse"
                 data-target="#navbarNav" 
                 aria-controls="navbarNav"
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                       
                    <li className='nav-item '>
                        <a className=" nav-link " href="/register">Register</a>
                       </li> 

                       {currentUser ? (<h6 className='mt-2'>{currentUser.name}</h6>) : ( <li className='nav-item '>
                        <a className=" nav-link " href="/login">Login</a>
                       </li> )}



{/* 
                       <div className ="dropdown mt-2">
                       <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         {currentUser.name}
                       </a>
                       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         <a className="dropdown-item" href="#"> orders</a>
                         <a className="dropdown-item" href="#" onClick={()=>{{dispatch(logoutUser())}}}>
                             <li>Logout</li></a>
                         
                       </div>
                     </div> */}


                        <li className='nav-item '>
                        <a className="nav-link" href="#" onClick={()=>{{dispatch(logoutUser())}}} >Logout </a>
                        </li> 


                       <li className='nav-item '>
                        <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
