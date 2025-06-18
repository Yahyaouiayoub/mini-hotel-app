import React, { useState } from 'react'
import { Header } from './components/Header'
import { ContactButton } from './components/ContactButton'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/services/Restaurant';
import RestaurantChild from './components/services/RestaurantChild';
import Housekeeping from './components/services/Housekeeping';
import Shopping from './components/services/Shopping';
import Reclamations from './components/services/Reclamations';
import ShoppingChild from './components/services/ShoppingChild';
export function App() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo)
  }
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* ----------------Header---------------------- */}
      <Header />
      
      <main className="flex-1 px-4 pb-20 pt-4 max-w-md mx-auto w-full mt-[90px]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ----------------restaurant routes---------------------- */}
          <Route path="/service/restaurant" element={<Restaurant />} />
          <Route path="/service/restaurant/:id" element={<RestaurantChild />} />
          {/* ----------------housekeeping routes---------------------- */}
          <Route path="/service/housekeeping" element={<Housekeeping />} />
          {/* ----------------shopping routes---------------------- */}
          <Route path="/service/shopping" element={<Shopping />} />
          <Route path="/service/shopping/:id" element={<ShoppingChild />} />
          {/* ----------------spa routes---------------------- */}
          {/* <Route path="/service/spa" element={<Restaurant />} /> */}
          {/* ----------------reclamations routes---------------------- */}
          <Route path="/service/reclamations" element={<Reclamations />} />
        </Routes>
      </main>

      <ContactButton isOpen={showContactInfo} toggleOpen={toggleContactInfo} />
    </div>
  )
}
