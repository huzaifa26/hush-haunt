import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import EventDescriptions from './pages/EventDescriptions';
import LoadingAnimation from './components/General/LoadingAnimation';
import Layout from './components/General/Layout';
// import Events from './pages/Events';
const EventsLazy = React.lazy(()=> import('./pages/Events'))
// import Event from './components/EventsDashboard/Event'
const EventLazy = React.lazy(()=> import('./components/EventsDashboard/Event'))
// import Login from './components/Authentication/Login';
const LoginLazy = React.lazy(()=> import('./components/Authentication/Login'))
// import Signup from './components/Authentication/Signup';
const SignupLazy = React.lazy(()=> import('./components/Authentication/Signup'))
// import SubscriptionAndPricing from './pages/SubscriptionAndPricing';
const SubscriptionAndPricingLazy = React.lazy(()=> import('./pages/SubscriptionAndPricing'))
// import ContactUs from './pages/ContactUs';
const ContactUsLazy = React.lazy(()=> import('./pages/ContactUs'))
// import HelpSub from './pages/HelpSub';
const HelpSubLazy = React.lazy(()=> import('./pages/HelpSub'))
// import Dashboard from './pages/Dashboard';
const DashboardLazy = React.lazy(()=> import('./pages/Dashboard'))
// import Likes from './pages/Likes';
const LikesLazy = React.lazy(()=> import('./pages/Likes'))
// import Ticket from './pages/Ticket';
const TicketLazy = React.lazy(()=> import('./pages/Ticket'))
// import TicketVerifiedEmail from './pages/TicketVerifiedEmail';
const TicketVerifiedEmailLazy = React.lazy(()=> import('./pages/TicketVerifiedEmail'))
// import CreatorDashboard from './pages/CreatorDashboard';
const CreatorDashboardLazy = React.lazy(()=> import('./pages/CreatorDashboard'))
// import EventsDashboard from './pages/EventsDashboard';
const EventsDashboardLazy = React.lazy(()=> import('./pages/EventsDashboard'))
// import Orders from './components/EventsDashboard/Orders';
const OrdersLazy = React.lazy(()=> import('./components/EventsDashboard/Orders'))
// import ReportAnalysis from './pages/ReportAnalysis';
const ReportAnalysisLazy = React.lazy(()=> import('./pages/ReportAnalysis'))
// import InvoiceAndBilling from './pages/InvoiceAndBilling';
const InvoiceAndBillingLazy = React.lazy(()=> import('./pages/InvoiceAndBilling'))
// import Setting from './pages/Setting';
const SettingLazy = React.lazy(()=> import('./pages/Setting'))
// import ProfileEdit from './components/Setting/ProfileEdit';
const ProfileEditLazy = React.lazy(()=> import('./components/Setting/ProfileEdit'))
// import InviteTeam from './components/Setting/InviteTeam';
const InviteTeamLazy = React.lazy(()=> import('./components/Setting/InviteTeam'))
// import AppInstallation from './components/Setting/AppInstallation';
const AppInstallationLazy = React.lazy(()=> import('./components/Setting/AppInstallation'))
// import Interests from './components/Authentication/Interests';
const InterestsLazy = React.lazy(()=> import('./components/Authentication/Interests'))
// import CreateEvent from './pages/CreateEvent';
const CreateEventLazy = React.lazy(()=> import('./pages/CreateEvent'))
// import BasicInfo from './components/CreateEvent/BasicInfo';
const BasicInfoLazy = React.lazy(()=> import('./components/CreateEvent/BasicInfo'))
// import Detail from './components/CreateEvent/Detail';
const DetailLazy = React.lazy(()=> import('./components/CreateEvent/Detail'))
// import OnlinePageEvent from './components/CreateEvent/OnlinePageEvent';
const OnlinePageEventLazy = React.lazy(()=> import('./components/CreateEvent/OnlinePageEvent'))
// import CreateTicket from './components/CreateEvent/CreateTicket';
const CreateTicketLazy = React.lazy(()=> import('./components/CreateEvent/CreateTicket'))
// import Publish from './components/CreateEvent/Publish';
const PublishLazy = React.lazy(()=> import('./components/CreateEvent/Publish'))
// import Community from './pages/Community';
const CommunityLazy = React.lazy(()=> import('./pages/Community'))
// import Community2 from './pages/Community2';
const Community2Lazy = React.lazy(()=> import('./pages/Community2'))

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventDescriptions />}></Route>
          <Route path='/events' element={<React.Suspense fallback={<LoadingAnimation />}><EventsLazy /></React.Suspense>}></Route>
          <Route path='/login' element={<React.Suspense fallback={<LoadingAnimation />}><LoginLazy /></React.Suspense>}></Route>
          <Route path='/signup' element={<React.Suspense fallback={<LoadingAnimation />}><SignupLazy /></React.Suspense>}></Route>
          <Route path='/interests' element={<React.Suspense fallback={<LoadingAnimation />}><InterestsLazy /></React.Suspense>}></Route>
          <Route path='/subscription-and-pricing' element={<React.Suspense fallback={<LoadingAnimation />}><SubscriptionAndPricingLazy /></React.Suspense>}></Route>
          <Route path='/contact-us' element={<React.Suspense fallback={<LoadingAnimation />}><ContactUsLazy /></React.Suspense>}></Route>
          <Route path='/community' element={<React.Suspense fallback={<LoadingAnimation />}><CommunityLazy /></React.Suspense>}></Route>
          <Route path='/community2' element={<React.Suspense fallback={<LoadingAnimation />}><Community2Lazy /></React.Suspense>}></Route>
          <Route path='/help-sub' element={<React.Suspense fallback={<LoadingAnimation />}><HelpSubLazy /></React.Suspense>}></Route>
          <Route path='/dashboard' element={<React.Suspense fallback={<LoadingAnimation />}><DashboardLazy /></React.Suspense>}></Route>
          <Route path='/likes' element={<React.Suspense fallback={<LoadingAnimation />}><LikesLazy /></React.Suspense>}></Route>
          <Route path='/ticket' element={<React.Suspense fallback={<LoadingAnimation />}><TicketLazy /></React.Suspense>}></Route>
          <Route path='/ticket-verified' element={<React.Suspense fallback={<LoadingAnimation />}><TicketVerifiedEmailLazy /></React.Suspense>}></Route>
          <Route path='/creator-dashboard' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><CreatorDashboardLazy /></React.Suspense>}></Route>
          <Route path='/event-dashboard' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><EventsDashboardLazy /></React.Suspense>}>
            <Route index element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><EventLazy /></React.Suspense>}></Route>
            <Route path='order' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><OrdersLazy /></React.Suspense>}></Route>
          </Route>
          <Route path='/report-analysis' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><ReportAnalysisLazy /></React.Suspense>}></Route>
          <Route path='/invoice-and-billing' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><InvoiceAndBillingLazy /></React.Suspense>}></Route>
          <Route path='/setting' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><SettingLazy /></React.Suspense>}>
            <Route index element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><ProfileEditLazy /></React.Suspense>}></Route>
            <Route path='invite-team' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><InviteTeamLazy /></React.Suspense>}></Route>
            <Route path='app-installation' element={<React.Suspense fallback={<Layout><LoadingAnimation /></Layout>}><AppInstallationLazy /></React.Suspense>}></Route>
          </Route>
          <Route path='/create-event' element={<React.Suspense fallback={<LoadingAnimation />}><CreateEventLazy /></React.Suspense>}>
            <Route index element={<React.Suspense fallback={<LoadingAnimation />}><BasicInfoLazy /></React.Suspense>}></Route>
            <Route path='detail' element={<React.Suspense fallback={<LoadingAnimation />}><DetailLazy /></React.Suspense>}></Route>
            <Route path='online-page-event' element={<React.Suspense fallback={<LoadingAnimation />}><OnlinePageEventLazy /></React.Suspense>}></Route>
            <Route path='create-ticket' element={<React.Suspense fallback={<LoadingAnimation />}><CreateTicketLazy /></React.Suspense>}></Route>
            <Route path='publish' element={<React.Suspense fallback={<LoadingAnimation />}><PublishLazy /></React.Suspense>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;