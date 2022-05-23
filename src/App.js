
import './App.css';
import Students from './components/Students'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div style={{color:"blue" ,marginRight:"30vw", fontSize:"150%"}}> SAMRAT</div>
          <div><Link to="/"><button className='btn btn-outline-light'>Home </button></Link></div>
          <div><Link to={'/students'}><button className='btn btn-outline-light'>Student </button></Link></div>
          <div><Link to={'contact'}><button className='btn btn-outline-light'>Contact  </button></Link></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
