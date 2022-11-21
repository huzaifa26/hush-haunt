import { useState } from 'react'
import EventDescriptions from './pages/EventDescriptions';
import Events from './pages/Events';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import SubscriptionAndPricing from './pages/SubscriptionAndPricing';
import ContactUs from './pages/ContactUs';
import HelpSub from './pages/HelpSub';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventDescriptions />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/subscription-and-pricing' element={<SubscriptionAndPricing />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route path='/help-sub' element={<HelpSub />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;