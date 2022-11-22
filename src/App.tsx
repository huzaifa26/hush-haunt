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
import Likes from './pages/Likes';
import Ticket from './pages/Ticket';
import TicketVerifiedEmail from './pages/TicketVerifiedEmail';
import CreatorDashboard from './pages/CreatorDashboard';

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
          <Route path='/likes' element={<Likes />}></Route>
          <Route path='/ticket' element={<Ticket />}></Route>
          <Route path='/ticket-verified' element={<TicketVerifiedEmail />}></Route>
          <Route path='/creator-dashboard' element={<CreatorDashboard />}></Route>
          <Route path='/event-dashboard' element={<CreatorDashboard />}></Route>
          <Route path='/report-analysis' element={<CreatorDashboard />}></Route>
          <Route path='/invoice-and-billing' element={<CreatorDashboard />}></Route>
          <Route path='/setting' element={<CreatorDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;