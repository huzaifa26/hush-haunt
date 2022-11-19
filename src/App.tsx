import { useState } from 'react'
import EventDescriptions from './pages/EventDescriptions';
import Events from './pages/Events';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EventDescriptions />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;