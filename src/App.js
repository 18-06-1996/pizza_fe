
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
//import 'react-bootstrap';
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar';

import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
     <Routes>

      <Route path='/' element={<Homescreen/>}/>
      <Route path='/cart' element={<Cartscreen/>}/>
<Route path='/login' element={<Loginscreen/>}/>
<Route path='/register' element={<Registerscreen/>}/>

     </Routes>
     </Router>
     
    </div>
  );
}

export default App;
