
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className=' w-screen z-0' >
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
