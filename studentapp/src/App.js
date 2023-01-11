import {Routes,Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import StudentRegistration from './components/StudentRegistration';
import StudentDetails from './components/StudentDetails';
function App() {
  return (
    <div className='container'>
    <div>
      <Navbar/>
    </div>
    <div><h2>IACSD student data web portal</h2>
         <Routes>
          <Route path="/loginform" element={<LoginForm/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<StudentRegistration/>}/>
          <Route path="/studetails" element={<StudentDetails/>}/>
          </Routes>   
    </div>
    </div>
  );
}

export default App;
