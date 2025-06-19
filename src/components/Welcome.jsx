import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative px-4 py-16 text-center text-white max-w-2xl mx-auto">
        <div className="mb-8">
          <img
            src="logo.png"
            alt="Luxe Hotels"
            className="mx-auto mb-6 w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Bienvenue au Hotel Luxe
          </h1>
          <p className="text-xs md:text-2xl font-light font-serif">
            Vivez un service exceptionnel à portée de main
          </p>
        </div>
        <button
          className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
          onClick={()=>navigate('/home')}
        >
          Accéder aux services de l'hôtel
          <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
