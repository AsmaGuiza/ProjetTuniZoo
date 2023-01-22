import logo from './logo.svg';
import {FaTheRedYeti} from "react-icons/fa";
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ChatBody from './Pages/ChatPage/ChatPage'
import HomeBody from './Pages/HomePageUser/HomePageUser';
import HomePageApp from './Pages/HomePageApp/HomePageApp';

import SearchBody from './Pages/SearchPage/SearchPage'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import Map from './Components/Map/Map';

import Register from './Components/Register/Register';
import HeaderProfilPage from './Components/HeaderProfilPage/HeaderProfilPage';


function App() {

  return (
    <div >
      
      <BrowserRouter>
     
        <Routes>
          <Route  path='/' element={<HomePageApp/>}/>
          <Route  path='Explore' element={<SignIn/>} />
          <Route  path='Register' element={<Register/>}/>
          <Route  path='Notifications' element={<Map/>} />
          <Route  path='Search' element={<SearchBody/>} />
          <Route  path='Chat' element={<ChatBody/>} />
          <Route  path='Home' element={<HomeBody/>} />
          <Route  path='Profil' element={<HeaderProfilPage/>} />


        </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}
export default App;
