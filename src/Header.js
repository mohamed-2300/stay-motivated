import React, { useState } from 'react';

function Header() {
  const [activeForm, setActiveForm] = useState(null);

  const handleMenuClick = (formName) => {
    setActiveForm(formName);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <div>
      {/* Barre de navigation */}
      <header className="bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* Nom de l'application */}
        <h1 className="text-2xl font-bold">Stay Motivated</h1>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => handleMenuClick('subscribe')} className="hover:underline">
                Subscribe
              </button>
            </li>
            <li>
              <button onClick={() => handleMenuClick('contact')} className="hover:underline">
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleMenuClick('login')} className="hover:underline">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Formulaire affiché conditionnellement */}
      {activeForm && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-black text-2xl"
            >
              X
            </button>

            {/* Formulaire de paiement */}
            {activeForm === 'subscribe' && (
              <div>
                <h2 className="text-black font-bold mb-4">Subscribe</h2>
                <p className="mb-4 text-black">Abonnement mensuel : <strong>99 MAD/mois</strong></p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Confirmer le paiement
                </button>
              </div>
            )}

            {/* Formulaire de contact */}
            {activeForm === 'contact' && (
              <div>
                <h2 className="text-black font-bold mb-4">Contact</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="text-black border border-gray-300 p-2 w-full rounded"
                      placeholder="Votre email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea
                      className="text-black border border-gray-300 p-2 w-full rounded"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Envoyer
                  </button>
                </form>
              </div>
            )}

            {/* Formulaire de connexion */}
            {activeForm === 'login' && (
              <div>
                <h2 className="text-black font-bold mb-4">Login</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="text-black border border-gray-300 p-2 w-full rounded"
                      placeholder="Votre email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Mot de passe</label>
                    <input
                      type="password"
                      className="text-black border border-gray-300 p-2 w-full rounded"
                      placeholder="Votre mot de passe"
                    />
                  </div>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Connexion
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
