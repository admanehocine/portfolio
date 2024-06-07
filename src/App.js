 
import './App.css';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className=''>
    <Navbar />
    <hr className='xl:px-28' /> 
    <Outlet/>
    {/*<Footer/>*/}
    </div>
    
  )
}

export default App;
 