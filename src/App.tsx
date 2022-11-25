import { useState } from 'react'
import EventDescriptions from './pages/EventDescriptions';
import Events from './pages/Events';
import Event from './components/EventsDashboard/Event'
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
import EventsDashboard from './pages/EventsDashboard';
import Orders from './components/EventsDashboard/Orders';
import ReportAnalysis from './pages/ReportAnalysis';
import InvoiceAndBilling from './pages/InvoiceAndBilling';

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
          <Route path='/event-dashboard' element={<EventsDashboard />}>
            <Route index element={<Event />}></Route>
            <Route path='order' element={<Orders />}></Route>
          </Route>
          <Route path='/report-analysis' element={<ReportAnalysis />}></Route>
          <Route path='/invoice-and-billing' element={<InvoiceAndBilling />}></Route>
          <Route path='/setting' element={<CreatorDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )}

export default App;