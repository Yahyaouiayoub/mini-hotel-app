import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const predefinedReclamations = [
  "Chambre non nettoyée",
  "Serviettes non changées",
  "Draps sales",
  "Sol non nettoyé",
  "Miroirs ou vitres sales",
  "Pas de passage du service de nuit",
  "Chambre pas faite à l’heure demandée"
];


export default function Housekeeping() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1); // Retour à la page précédente
  };

  const [selectedReclamations, setSelectedReclamations] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [reclamations, setReclamations] = useState([]);

  const handleCheckboxChange = (label) => {
    if (selectedReclamations.includes(label)) {
      setSelectedReclamations(selectedReclamations.filter(item => item !== label));
    } else {
      setSelectedReclamations([...selectedReclamations, label]);
    }
  };

  const selectedCategories = predefinedReclamations
    .filter((rec) => selectedReclamations.includes(rec.label))
    .map((rec) => rec.category);

  const uniqueCategories = [...new Set(selectedCategories)];
  const inferredCategory = uniqueCategories.length === 1 ? uniqueCategories[0] : null;


  const handleSubmit = (e) => {
    e.preventDefault();

    const submission = {
      problemes: selectedReclamations,
      categorie: "Ménage",
      message: showCustomForm ? customMessage : "",
      status: "pending",
    };

    setReclamations([...reclamations, submission]);
    setShowAlertMessage(true);

    // Reset form
    setSelectedReclamations([]);
    setShowCustomForm(false);
    setCustomMessage('');
  
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <button onClick={onBack} className="font-bold flex items-center text-gray-600 mb-4">
        <ArrowLeftIcon className="w-5 h-5 mr-1" />
        Retour aux services
      </button>

      <h1 className="text-2xl font-semibold mb-4">Service de ménage</h1>

      <p className="mb-2 text-gray-700">Sélectionnez un ou plusieurs problèmes :</p>
      <div className="mb-4 space-y-2">
        {predefinedReclamations.map((rec, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={rec.label}
              checked={selectedReclamations.includes(rec)}
              onChange={() => handleCheckboxChange(rec)}
              className="accent-blue-600"
            />
            <span>{rec}</span>
          </label>
        ))}

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            value="custom"
            checked={showCustomForm}
            onChange={() => setShowCustomForm(!showCustomForm)}
            className="accent-blue-600"
          />
          <span>Autre problème</span>
        </label>
      </div>

      {(selectedReclamations.length > 0 || showCustomForm) && (
        <div className="p-4 bg-green-100 rounded mb-4">
          {selectedReclamations.length > 0 && (
            <>
              <p>
                <strong>Réclamations sélectionnées :</strong>{" "}
                {selectedReclamations.join(', ')}
              </p>
              <p>
                <strong>Catégorie détectée :</strong>{" "}
                {inferredCategory || "Problèmes de plusieurs catégories"}
              </p>
            </>
          )}
          {showCustomForm && (
            <p>
              <strong>Autre problème :</strong> message personnalisé requis
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showCustomForm && (
          <label className="block">
            <span className="block mb-1 font-medium">Expliquez votre problème :</span>
            <textarea
              required
              className="w-full p-2 border rounded"
              rows="4"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Décrivez ici votre problème..."
            ></textarea>
          </label>
        )}

        <button
          type="submit"
          disabled={
            (!showCustomForm && selectedReclamations.length === 0) ||
            (showCustomForm && customMessage.trim() === "")
          }
          className={`text-white px-4 py-2 rounded transition-colors duration-200 ${
            (!showCustomForm && selectedReclamations.length === 0) ||
            (showCustomForm && customMessage.trim() === "")
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Envoyer
        </button>
      </form>

      {reclamations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Réclamations précédentes :</h2>
          <ul className="list-disc pl-5 space-y-2">
            {reclamations.map((rec, index) => (
              <li key={index} className="text-gray-700">
                {rec.problemes.join(', ')}<br />
                <strong>Catégorie :</strong> {rec.categorie}<br />
                {rec.message && <><strong>Message :</strong> {rec.message}<br /></>}
                <span className={`font-bold ${rec.status === "pending" ? 'text-amber-500' : 'text-green-600'}`}>
                  {rec.status === "pending" ? " (En attente)" : " (Résolu)"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showAlertMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setShowAlertMessage(false)}
        >
          <div
            className="p-4 bg-green-100 text-green-800 rounded w-80 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p>Votre réclamation a été envoyée avec succès !</p>
            <p>Nous vous contacterons bientôt pour résoudre votre problème.</p>
            <div className="text-center mt-2">
              <button
                onClick={() => setShowAlertMessage(false)}
                className="text-blue-600 hover:underline"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
