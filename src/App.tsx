import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
// import EventDescriptions from './pages/EventDescriptions';
import Events from './pages/Events';
const EventsLazy = React.lazy(()=> import('./pages/Events'))
import Event from './components/EventsDashboard/Event'
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
import Setting from './pages/Setting';
import ProfileEdit from './components/Setting/ProfileEdit';
import InviteTeam from './components/Setting/InviteTeam';
import AppInstallation from './components/Setting/AppInstallation';
import Interests from './components/Authentication/Interests';
import CreateEvent from './pages/CreateEvent';
import BasicInfo from './components/CreateEvent/BasicInfo';
import Detail from './components/CreateEvent/Detail';
import OnlinePageEvent from './components/CreateEvent/OnlinePageEvent';
import CreateTicket from './components/CreateEvent/CreateTicket';
import Publish from './components/CreateEvent/Publish';
import Community from './pages/Community';
import Community2 from './pages/Community2';
import EventDescriptions from './pages/EventDescriptions';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventDescriptions />}></Route>
          <Route path='/events' element={<EventsLazy />}></Route>
          {/* <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/interests' element={<Interests />}></Route>
          <Route path='/subscription-and-pricing' element={<SubscriptionAndPricing />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route path='/community' element={<Community />}></Route>
          <Route path='/community2' element={<Community2 />}></Route>
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
          <Route path='/setting' element={<Setting />}>
            <Route index element={<ProfileEdit />}></Route>
            <Route path='invite-team' element={<InviteTeam />}></Route>
            <Route path='app-installation' element={<AppInstallation />}></Route>
          </Route>
          <Route path='/create-event' element={<CreateEvent />}>
            <Route index element={<BasicInfo />}></Route>
            <Route path='detail' element={<Detail />}></Route>
            <Route path='online-page-event' element={<OnlinePageEvent />}></Route>
            <Route path='create-ticket' element={<CreateTicket />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;