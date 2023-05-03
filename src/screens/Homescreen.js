import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaActions'



const Homescreen = () => {

const dispatch = useDispatch()
const pizzasstate= useSelector(state=>state.getAllPizzasReducer)
const {pizzas,error,loading}= pizzasstate;

useEffect(()=>{
 dispatch(getAllPizzas())
},[])

  return (
    <div className='row'>



      {  pizzas.map((pizza,index)=>{
            return <div className='col-md-4' key={index}>
                        <div >
                          <Pizza pizza={pizza}/>
                        </div>
                    </div> 
                  })
                }
  

  
    </div>
  )
}

export default Homescreen
