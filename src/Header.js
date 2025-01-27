import React, { useState } from 'react';

function Header() {
  const [activeForm, setActiveForm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (formName) => {
    setActiveForm(formName);
  };

  const closeForm = () => {
    setActiveForm(null);
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Barre de navigation */}
      <header className=" bg-black text-white md:px-20 py-4 md:flex md:justify-between md:items-center fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* Nom de l'application */}

        <div className="flex justify-between items-center">
          <span className='flex md:justify-between items-center cursor-pointer'><img src="./st.png" alt="" className='pr-2' style={{ height: "50px", borderRadius: "50%" }} />
            <h1 className="text-2xl font-bold ">Stay Motivated</h1></span>
          <span className='text-3xl cursor-pointer mx-2 md:hidden'>
            <ion-icon name={menuOpen ? "close-outline" : "menu-outline"} onClick={toggleMenu}></ion-icon></span>
        </div>

        {/* Menu */}
        
        <nav>
          <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-black
           w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 md:opacity-100 
           ${menuOpen ? "top-20 opacity-100" : "top-[-400px] opacity-0"} 
           top-[-400px] transition-all
            ease-in duration-500`}>
            <li className='mx-4 my-6 md:my-0'>
              <button onClick={() => handleMenuClick('subscribe')} className="hover:underline">
                Subscribe
              </button>
            </li>
            <li className='mx-4 my-6 md:my-0'>
              <button onClick={() => handleMenuClick('contact')} className="hover:underline">
                Contact
              </button>
            </li>
            <li className='mx-4 my-6 md:my-0'>
              <button onClick={() => handleMenuClick('login')} className="hover:underline">
                Login
              </button>
            </li>
            <li className='mx-4 my-6 md:my-0'>
              <button className="bg-gray-700 text-yellow-300  px-4 py-1 rounded hover:scale-110 hover:bg-gray-800 duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Formulaire affiché conditionnellement */}

      
      {activeForm && (
        <div onClick={closeForm} className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative ">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-black text-2xl"
            >
              <ion-icon name="close-outline"></ion-icon>

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
