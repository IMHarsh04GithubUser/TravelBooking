import './App.css';
import { TravelProvider, TravelContext } from './context/authcontext';
import Home from './components/Home/Home';
import Flights from './components/Flights/Flights';
import SignIn from './components/authentication/SignIn';
import Login from './components/authentication/Login';
import Hamburger from './components/hamburger_menu/Hamburger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';

const App: React.FC = () => {
  return (
    <TravelProvider>
      <MainApp />
    </TravelProvider>
  );
};

const MainApp: React.FC = () => {
  const context = useContext(TravelContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { isDark,isDisplay,isLogin } = context;

  return (
    <div
      style={{
        backgroundColor: isDark ? '#121212' : '#f2f2f2',
        color: isDark ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Flights />} path='/bookflight' />
        </Routes>
      </BrowserRouter>
      {isDisplay?'':<SignIn />}
      {isLogin?'':<Login />}
      <Hamburger />
    </div>
  );
};

export default App;
