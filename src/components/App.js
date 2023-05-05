import Reg from './Reg'; 
import Navbar from './Navbar';
import RegDetails from './RegDetails';
import Aboutme from './Aboutme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() { 
  
  return ( 
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Reg/>}/>
          <Route exact path='/userdata' element={<RegDetails/>}/>
          <Route exact path='/aboutme' element={<Aboutme/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
