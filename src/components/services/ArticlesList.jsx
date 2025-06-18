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
                <h1 className="text-2xl font-semibold mb-4">
                  {article.title}
                </h1>
                <div className="">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-semibold">{article.price} MAD</div>
                  </div>
                </div>
                <button onClick={() => {
                            setSelectedArticle(article);
                            setQuantity(1);
                          }} className="w-full flex bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-600 ">
                  <CirclePlus className="mx-2 h-6 w-6" /> <span className='text-xl'>DEMANDE</span>
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
            <p className="text-gray-700 mb-2">Prix : {selectedArticle.price} MAD</p>
            <label className="block mb-2 text-sm font-medium">Quantité :</label>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-1 mb-4"
            />
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



      {/* <div
          key={article.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
        >
          <button
            onClick={() => {
              setSelectedArticle(article);
              setQuantity(1);
            }}
            className="bg-amber-200 p-1 rounded-full transition-colors hover:bg-amber-300 float-right"
          >
            <CirclePlus className="h-6 w-6 text-amber-700" />
          </button>
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border border-gray-200 shadow-sm">
            <img
              src={getImage(article.image || 'default.jpg')}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-gray-800 text-center">{article.title}</h3>
          <p className="text-sm text-center text-gray-600">{article.price} MAD</p>
        </div> */}
    </div>
  );
}
