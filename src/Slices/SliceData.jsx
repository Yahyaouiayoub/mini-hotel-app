// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  UtensilsIcon,
  ShoppingBagIcon,
  ShieldAlert,
  BrushCleaning,
} from 'lucide-react';

const data = {
  categories: [
    {
      id: 1,
      Route: '/service/restaurant',
      name: 'Service Restaurant',
      description: 'Nourriture et boissons livrées à votre chambre',
      icon: <UtensilsIcon className="w-6 h-6" />,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      id: 2,
      Route: '/service/housekeeping',
      name: 'Entretien ménager',
      description: 'Demandez un service de nettoyage de la chambre',
      icon: <BrushCleaning className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 3,
      Route: '/service/shopping',
      name: 'Boutique de l’hôtel',
      description: 'Produits de la boutique et service de livraison',
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      color: 'bg-slate-100 text-slate-600',
    },
    {
      id: 4,
      name: 'Réclamations',
      Route: '/service/reclamations',
      description: 'Signaler un problème ou donner un avis',
      icon: <ShieldAlert className="w-6 h-6" />,
      color: 'bg-red-100 text-red-600',
    },
  ],
  children: [
    { id: 1, name: "Petit déjeuner", image: "breakfast.jpg", parentId: 1 },
    { id: 2, name: "Déjeuner", image: "lunch.jpg", parentId: 1 },
    { id: 3, name: "Dîner", image: "Dinner.jpg", parentId: 1 },
    { id: 4, name: "Boissons", image: "Boissons.jpg", parentId: 1 },

    { id: 5, name: "Souvenirs", image: "Souvenirs.jpg", parentId: 3 },
    { id: 6, name: "Électronique", image: "Electronique.jpg", parentId: 3 },
    { id: 7, name: "Produits de toilette", image: "toiletries.jpg", parentId: 3 },
    { id: 8, name: "Accessoires", image: "Accessories.jpg", parentId: 3 },
  ],
  articles: [
  // Petit déjeuner (1)
  {
    id: 1,
    parentChildId: 1,
    title: 'Croissant',
    price: 10,
    currency: 'MAD',
    description: 'Croissant frais au beurre',
    image: 'Croissant.jpg',
  },
  {
    id: 2,
    parentChildId: 1,
    title: 'Omelette',
    price: 15,
    currency: 'MAD',
    description: 'Omelette aux fines herbes',
    image: 'omelette.jpg',
  },
  {
    id: 5,
    parentChildId: 1,
    title: 'Tartine',
    price: 7,
    currency: 'MAD',
    description: 'Tartines avec beurre et confiture',
    image: 'tartine.jpg',
  },

  // Déjeuner (2)
  {
    id: 6,
    parentChildId: 2,
    title: 'Tajine',
    price: 40,
    currency: 'MAD',
    description: 'Tajine marocain traditionnel à l’agneau',
    image: 'Tajine.jpg',
  },
  {
    id: 7,
    parentChildId: 2,
    title: 'Couscous',
    price: 35,
    currency: 'MAD',
    description: 'Couscous vapeur aux légumes et poulet',
    image: 'couscous.jpg',
  },
  {
    id: 8,
    parentChildId: 2,
    title: 'Brochette mixte',
    price: 45,
    currency: 'MAD',
    description: 'Brochettes d’agneau et poulet',
    image: 'brochette.jpg',
  },
  {
    id: 9,
    parentChildId: 2,
    title: 'Salade marocaine',
    price: 20,
    currency: 'MAD',
    description: 'Salade fraîche à la tomate et oignon',
    image: 'salade marocaine.jpg',
  },

  // Dîner (3)
  {
    id: 11,
    parentChildId: 3,
    title: 'Pizza',
    price: 60,
    currency: 'MAD',
    description: 'Pizza fromage et pepperoni',
    image: 'pizza.jpg',
  },
  {
    id: 12,
    parentChildId: 3,
    title: 'Pastilla',
    price: 50,
    currency: 'MAD',
    description: 'Pastilla au poulet et amandes',
    image: 'pastilla.jpg',
  },
  {
    id: 13,
    parentChildId: 3,
    title: 'Harira',
    price: 25,
    currency: 'MAD',
    description: 'Soupe marocaine traditionnelle',
    image: 'harira.jpg',
  },
  {
    id: 14,
    parentChildId: 3,
    title: 'Gratin de légumes',
    price: 30,
    currency: 'MAD',
    description: 'Gratin maison aux légumes de saison',
    image: 'gratin.jpg',
  },
  {
    id: 15,
    parentChildId: 3,
    title: 'Yaourt maison',
    price: 12,
    currency: 'MAD',
    description: 'Yaourt nature ou fruité',
    image: 'yaourt.jpg',
  },

  // Boissons (4)
  
  {
    id: 10,
    parentChildId: 4,
    title: 'Jus d’avocat',
    price: 18,
    currency: 'MAD',
    description: 'Jus d’avocat à la fleur d’oranger',
    image: 'jus-avocat.jpg',
  },
  
  {
    id: 4,
    parentChildId: 4,
    title: 'Café',
    price: 8,
    currency: 'MAD',
    description: 'Café noir ou au lait',
    image: 'cafe.jpg',
  },
  {
    id: 3,
    parentChildId: 4,
    title: 'Jus d’orange',
    price: 12,
    currency: 'MAD',
    description: 'Jus d’orange pressé',
    image: 'jus-orange.jpg',
  },
  {
    id: 16,
    parentChildId: 4,
    title: 'Atay bnna-nae',
    price: 10,
    currency: 'MAD',
    description: 'Thé marocain à la menthe',
    image: 'atay.jpg',
  },
  {
    id: 17,
    parentChildId: 4,
    title: 'Soda',
    price: 12,
    currency: 'MAD',
    description: 'Canette de soda au choix',
    image: 'Soda.jpg',
  },
  {
    id: 18,
    parentChildId: 4,
    title: 'Eau minérale',
    price: 8,
    currency: 'MAD',
    description: 'Bouteille d’eau 50cl',
    image: 'Eau minérale.jpg',
  },
  {
    id: 19,
    parentChildId: 4,
    title: 'Jus mixte',
    price: 15,
    currency: 'MAD',
    description: 'Jus de fruits frais mélangés',
    image: 'jus-mixte.jpg',
  },
  {
    id: 20,
    parentChildId: 4,
    title: 'Lait chocolaté',
    price: 10,
    currency: 'MAD',
    description: 'Boisson lactée au chocolat',
    image: 'lait-choco.jpg',
  },

  // Souvenirs (5)
  {
    id: 21,
    parentChildId: 5,
    title: 'Porte-clés marocain',
    price: 15,
    currency: 'MAD',
    description: 'Porte-clés artisanal',
    image: 'Porte-clés marocain.jpg',
  },
  {
    id: 22,
    parentChildId: 5,
    title: 'Mini tajine décoratif',
    price: 40,
    currency: 'MAD',
    description: 'Tajine en céramique décoratif',
    image: 'Mini tajine décoratif.jpg',
  },
  {
    id: 23,
    parentChildId: 5,
    title: 'Aimant frigo',
    price: 10,
    currency: 'MAD',
    description: 'Aimant décoratif marocain',
    image: 'Aimant frigo.jpg',
  },
  {
    id: 24,
    parentChildId: 5,
    title: 'Bracelet artisanal',
    price: 20,
    currency: 'MAD',
    description: 'Bracelet fait main en cuir',
    image: 'Bracelet artisanal.jpg',
  },
  {
    id: 25,
    parentChildId: 5,
    title: 'Coffret souvenir',
    price: 80,
    currency: 'MAD',
    description: 'Coffret avec objets artisanaux',
    image: 'coffret.jpg',
  },

  // Électronique (6)
  {
    id: 26,
    parentChildId: 6,
    title: 'Chargeur USB',
    price: 30,
    currency: 'MAD',
    description: 'Chargeur rapide pour téléphone',
    image: 'Chargeur.jpg',
  },
  {
    id: 27,
    parentChildId: 6,
    title: 'Batterie externe',
    price: 90,
    currency: 'MAD',
    description: 'Powerbank 10,000mAh',
    image: 'powerbank.jpg',
  },
  {
    id: 28,
    parentChildId: 6,
    title: 'Casque Bluetooth',
    price: 120,
    currency: 'MAD',
    description: 'Casque sans fil Bluetooth',
    image: 'CasqueBlth.jpg',
  },
  {
    id: 29,
    parentChildId: 6,
    title: 'Lampe LED USB',
    price: 25,
    currency: 'MAD',
    description: 'Lampe portable à brancher sur USB',
    image: 'Lampe LED.jpg',
  },
  {
    id: 30,
    parentChildId: 6,
    title: 'Adaptateur international',
    price: 45,
    currency: 'MAD',
    description: 'Adaptateur universel de voyage',
    image: 'Adaptateur international.jpg',
  },

  // Produits de toilette (7)
  {
    id: 31,
    parentChildId: 7,
    title: 'Shampoing',
    price: 15,
    currency: 'MAD',
    description: 'Petit flacon de shampoing',
    image: 'shampoing.jpg',
  },
  {
    id: 32,
    parentChildId: 7,
    title: 'Gel douche',
    price: 15,
    currency: 'MAD',
    description: 'Gel douche senteur fleur d’oranger',
    image: 'Gel douche.jpg',
  },
  {
    id: 33,
    parentChildId: 7,
    title: 'Savon naturel',
    price: 10,
    currency: 'MAD',
    description: 'Savon à l’huile d’argan',
    image: 'Savon naturel.jpg',
  },
  {
    id: 34,
    parentChildId: 7,
    title: 'Brosse à dents',
    price: 12,
    currency: 'MAD',
    description: 'Brosse à dents souple',
    image: 'Brosse à dents.jpg',
  },
  {
    id: 35,
    parentChildId: 7,
    title: 'Crème hydratante',
    price: 20,
    currency: 'MAD',
    description: 'Crème pour peau sèche',
    image: 'Crème hydratante.jpg',
  },

  // Accessoires (8)
  {
    id: 36,
    parentChildId: 8,
    title: 'Chapeau de soleil',
    price: 45,
    currency: 'MAD',
    description: 'Chapeau léger anti-UV',
    image: 'chapeau.jpg',
  },
  {
    id: 37,
    parentChildId: 8,
    title: 'Lunettes de soleil',
    price: 70,
    currency: 'MAD',
    description: 'Lunettes stylées UV400',
    image: 'lunettes.jpg',
  },
  {
    id: 38,
    parentChildId: 8,
    title: 'Écharpe légère',
    price: 25,
    currency: 'MAD',
    description: 'Écharpe en coton pour l’été',
    image: 'echarpe.jpg',
  },
  {
    id: 39,
    parentChildId: 8,
    title: 'Sac banane',
    price: 60,
    currency: 'MAD',
    description: 'Sac banane pratique pour sorties',
    image: 'sac.jpg',
  },
  {
    id: 40,
    parentChildId: 8,
    title: 'Parapluie pliable',
    price: 35,
    currency: 'MAD',
    description: 'Parapluie compact pour voyage',
    image: 'Parapluie.jpg',
  },
],
  reclamations: []
};

const initialState = {
  categories: data.categories,
  children: data.children,
  services: data.services,
  articles: data.articles,
  reclamations: data.reclamations,
  loading: false,
  error: null,
};

const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addComplaint: (state, action) => {
      state.reclamations.push({
        id: state.reclamations.length + 1, // or use a UUID generator
        ...action.payload,
        date: new Date().toISOString().split('T')[0], // current date in YYYY-MM-DD
        status: 'pending',
      });
    },
    updateComplaintStatus: (state, action) => {
      const { id, status } = action.payload;
      const complaint = state.reclamations.find((rec) => rec.id === id);
      if (complaint) {
        complaint.status = status;
      }
    },
  },
});

export const { addComplaint, updateComplaintStatus } = DataSlice.actions;
export default DataSlice.reducer;
