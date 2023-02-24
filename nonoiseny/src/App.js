import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import MarketingLandingPage from '../pages/marketing'

// import MainPage from './components/mainPageWithLogin/MainPage';
// import Community from './components/Community/Community';
// import HomePageWithoutLogin from './components/homePageWithoutlogin/HomePageWithoutLogin';
// import Profile from './components/profilePage/Profile';

function App () {
  return (

    <Routes>
       {/* <Route path='/Community' element={<Community />} />
      <Route path='/' element={<MainPage />} /> */}
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<MarketingLandingPage />} />

      {/* <Route path='/profile' element={<Profile />} /> */}
      {/* <Route path='/main' element={<HomePageWithoutLogin />} /> */}
  
    </Routes>
    // <MainPage />
  )
}

export default App

