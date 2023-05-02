import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import pizzas  from '../pizzadata.js'
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

      {
        loading ?(<h3> Loading</h3>): error ? (<h3>somthing went wrong</h3>) :(

          pizzas.map(pizza=>{
            return <div className='col-md-4' key={pizza._id}>
                <div >
                   <Pizza pizza={pizza}/>
                </div>
            </div>
        })

        )
      }
  

  
    </div>
  )
}

export default Homescreen
