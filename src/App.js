import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Footer from './component/Footer';


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
 
      <Route path='/' element={<Home/>} />

     </Routes>
    <Footer/>
    </>
  );
}

export default App;
