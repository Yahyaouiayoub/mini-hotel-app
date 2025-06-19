import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/CartSlice';
import { CirclePlus } from 'lucide-react';

export default function ArticlesList({ articles }) {
  const images = import.meta.glob('../../images/*.{jpg,png,jpeg,svg}', { eager: true });
  const dispatch = useDispatch();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getImage = (filename) => {
    if (!filename) return null;
    const match = Object.entries(images).find(([path]) => path.includes(filename));
    return match ? match[1].default : null;
  };

  const handleAddToCart = (article) => {
    dispatch(addToCart(article));
  };

  if (!articles || articles.length === 0) {
    return <p className="text-gray-500 text-center">Aucun article disponible</p>;
  }

  return (
    <div className="">
      {articles.map((article) => (
          
          <div key={article.id} className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl max-h-40 overflow-hidden mx-auto mb-3 border border-gray-200 shadow-sm">
                <img
                  src={getImage(article.image || 'default.jpg')}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold font-serif">
                  {article.title}
                </h1>
                {/* <p className="text-gray-600 mb-4">{article.description}</p> */}
                <div className="">
                  <div className="flex justify-end">
                    <span className="text-sm font-semibold px-3 py-2 bg-gray-100 rounded-lg">{article.price} MAD</span>
                  </div>
                </div>
                <button onClick={() => {
                            setSelectedArticle(article);
                            setQuantity(1);
                          }} className="flex bg-amber-400 text-white py-3 px-4 rounded-lg hover:bg-amber-600 ">
                  <CirclePlus className="mx-2 h-5 w-5" /> <span className=''>DEMANDE</span>
                </button>
              </div>
            </div>
          </div>
        
      ))}

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white p-6 rounded-xl w-80 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">{selectedArticle.title}</h2>
            <p className="text-gray-600 mb-4">{selectedArticle.description}</p>
            <p className="text-gray-700 mb-2">Prix : {selectedArticle.price} MAD</p>
            <label className="block mb-2 text-sm font-medium">Quantité :</label>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-1 mb-4"
            />
            <div className='mb-4 flex justify-end'>
              <span className='text-sm font-semibold px-3 py-2 bg-gray-100 rounded-lg'>Total : {quantity*selectedArticle.price}</span>
            </div>
            <div className="flex items-center justify-end mb-4">
              <button
                onClick={() => {
                  handleAddToCart({ ...selectedArticle, quantity });
                  setSelectedArticle(null);
                }}
                className="bg-amber-300 text-white px-3 py-2 mr-2 rounded hover:bg-amber-500"
              >
                Ajouter au panier
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
