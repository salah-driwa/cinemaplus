import { Route, Routes ,useLocation  } from 'react-router-dom';

import Home from './Pages/Home';
import Footer from './component/Footer';
import Landingpage from './Pages/Landingpage';
import Signin from './Pages/Signin';
import { SkeletonTheme } from 'react-loading-skeleton';
import { AuthContextProvider } from './context/AuthContext';
import Signup from './Pages/Signup';
import Favoriteshow from './Pages/Favoriteshow';
import MoviePage from './component/moviepage/MoviePage';
import Navbar from './component/Navbar/Navbar';
import Filter from './Pages/Filter';


function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/Signin' && location.pathname !== '/Signup';



  return (
    <>
    <AuthContextProvider>
          <SkeletonTheme  baseColor="#202020" highlightColor="#444">
            {showNavbar && <Navbar/>}
               <Routes>
               <Route path='/Signin' element={ <Signin/>} />
               <Route path='/Signup' element={ <Signup/>} />
               <Route path='/Favoriteshow' element={ <Favoriteshow/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/Filter' element={ <Filter/>} />

                <Route path='/' element={ <Landingpage/>} />
                <Route path="/movies/:id" element={<MoviePage/>} />
               </Routes>
        <Footer/>
          </SkeletonTheme>
    </AuthContextProvider>
    </>
  );
}

export default App;
