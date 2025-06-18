import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity ,deleteFromCart ,validationCART} from '../Slices/CartSlice';

export function Header() {
  const images = import.meta.glob('../images/*.{jpg,png,jpeg,svg}', { eager: true });
  const carts = useSelector((state) => state.cart.carts);
  const [cart, setCart] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();

  const openCartModal = () => setOpenCart(true);
  const closeCartModal = () => setOpenCart(false);

  useEffect(() => {
    const item = carts.find((item) => item.id === 1);
    setCart(item || null);
  }, [carts]);

  const getImage = (filename) => {
    if (!filename) return null;
    const match = Object.entries(images).find(([path]) => path.includes(filename));
    return match ? match[1].default : null;
  };

  const handleIncrease = (id) => {
    // Dispatch Redux action or set state
    dispatch(increaseQuantity(id)); // If using Redux
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id)); // If using Redux
  };

  const handelValideCart = () => {
    if (cart?.products.length > 0) {
      // Here you can handle the validation of the cart, e.g., sending it to an API
      console.log('Cart validated:', cart);
      dispatch(validationCART(cart));
      closeCartModal(); // If you have a validation action in Redux
      alert(`Votre commande a été validée avec succès !\nTotal: ${cart.TotalPrice} MAD`);
    } 
  }

  return (
    <header className="fixed bg-white shadow-sm w-full">
      <div className="max-w-md mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://placehold.co/100x40/gold/white?text=LUXE"
            alt="Logo Hôtel"
            className="h-8"
          />
          <div className="ml-2 border-l border-gray-300 pl-2">
            <h1 className="text-lg font-semibold text-gray-800">Services de l'hôtel</h1>
            <p className="text-xs text-gray-500">Chambre 304</p>
          </div>
        </div>

        <div className="relative inline-block" onClick={openCartModal}>
          <button className="p-2 rounded-full bg-amber-200 transition-colors relative">
            <ShoppingCartIcon className="h-7 w-7 text-amber-700" />
          </button>
          {cart?.cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cart.cartCount}
            </span>
          )}
        </div>
      </div>

      {openCart && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeCartModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Votre panier</h2>

            {cart?.cartCount > 0 ? (
              <>
                <main className="p-2 h-96 overflow-y-auto">
                  <table className="w-full text-left text-sm ">
                    <thead className="text-gray-500 text-center">
                      <tr>
                        <th className="py-2 border border-gray-200">Article</th>
                        <th className="py-2 border border-gray-200">Prix</th>
                        <th className="py-2 border border-gray-200">Quantité</th>
                        <th className="py-2 border border-gray-200">Total</th>
                        <th className="py-2 border border-gray-200">Sup</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cart.products.map((article) => (
                        <tr key={article.id} className="hover:bg-gray-50 text-sm">
                          <td className="py-3 max-w-[50px]  items-center text-gray-700 border border-gray-200  text-center">
                            <img
                              src={getImage(article.image || 'default.jpg')}
                              alt={article.title}
                              className="w-12 h-12 object-cover rounded m-auto"
                            />
                            <span className="font-medium text-gray-800">{article.title}</span>
                          </td>
                          <td className="py-3 text-gray-700 border border-gray-200 text-center">{article.price} DH</td>
                          <td className="py-3 border border-gray-200 text-center max-w-[50px]">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => {
                                  if (article.quantity > 1) 
                                    handleDecrease(article.id)
                                }}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                disabled={article.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="min-w-[20px] text-gray-800">{article.quantity}</span>
                              <button
                                onClick={() => handleIncrease(article.id)}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-3 text-gray-800 font-semibold border border-gray-200 text-center">
                            {(article.price * article.quantity)} DH
                          </td>
                          <td onClick={() => dispatch(deleteFromCart(article.id))} 
                              className="py-3 text-gray-700 border border-gray-200 pl-3"
                            >
                            <Trash2 className='h-7 w-7 text-red-500'/>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </main>
                <p className="font-bold text-right mt-4">
                  Total : {cart?.TotalPrice || 0} MAD
                </p>
              </>
            ) : (
              <p className="text-gray-500">Votre panier est vide.</p>
            )}

            
            <div className="grid grid-flow-col gap-4 mt-4">
              {cart?.cartCount > 0 &&
                <button
                  onClick={handelValideCart}
                  className=" mt-4 bg-amber-300 text-white px-4 py-2 rounded hover:bg-amber-600"
                >
                  valider la commande
                </button>
              }
              <button
                onClick={closeCartModal}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Fermer
              </button>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
}
