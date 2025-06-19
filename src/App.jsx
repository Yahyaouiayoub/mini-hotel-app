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
import Welcome from './components/Welcome';
export function App() {
  const [showContactInfo, setShowContactInfo] = useState(false)
  
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo)
  }
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* ----------------Header---------------------- */}
      <Header />
      
      
        <main className="flex-1 max-w-md mx-auto w-full">
          <Routes>
            <Route path="/" element={<Welcome />} />

            {/* Wrapper to apply mt-4 spacing to the rest */}
            <Route
              path="/home"
              element={
                <div className="mt-20 px-4 pt-4">
                  <Home />
                </div>
              }
            />
            {/* ----------------restaurant routes---------------------- */}
            <Route
              path="/service/restaurant"
              element={
                <div className="mt-24 px-4 pt-4">
                  <Restaurant />
                </div>
              }
            />
            <Route
              path="/service/restaurant/:id"
              element={
                <div className="mt-24 px-4 pt-4">
                  <RestaurantChild />
                </div>
              }
            />
            {/* ----------------housekeeping routes---------------------- */}
            <Route
              path="/service/housekeeping"
              element={
                <div className="mt-24 px-4 pt-4">
                  <Housekeeping />
                </div>
              }
            />
            {/* ----------------shopping routes---------------------- */}
            <Route
              path="/service/shopping"
              element={
                <div className="mt-24 px-4 pt-4">
                  <Shopping />
                </div>
              }
            />
            <Route
              path="/service/shopping/:id"
              element={
                <div className="mt-24 px-4 pt-4">
                  <ShoppingChild />
                </div>
              }
            />
            {/* ----------------reclamations routes---------------------- */}
            <Route
              path="/service/reclamations"
              element={
                <div className="mt-24 px-4 pt-4">
                  <Reclamations />
                </div>
              }
            />
          </Routes>
        </main>


      <ContactButton isOpen={showContactInfo} toggleOpen={toggleContactInfo} />
    </div>
  )
}
