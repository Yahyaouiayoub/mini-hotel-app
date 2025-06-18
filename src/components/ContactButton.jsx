import React from 'react'
import { PhoneIcon, XIcon } from 'lucide-react'

export function ContactButton({ isOpen, toggleOpen }) {
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg p-4 animate-slideUp">
          <div className="mb-3 pb-2 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">Contacter l'hôtel</h3>
          </div>
          <div className="space-y-2">
            <a
              href="tel:+123456789"
              className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>Réception</span>
            </a>
            <a
              href="tel:+123456790"
              className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>Service en chambre</span>
            </a>
            <a
              href="tel:+123456791"
              className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>Urgence</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={toggleOpen}
        className={`fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-white" />
        ) : (
          <PhoneIcon className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  )
}
