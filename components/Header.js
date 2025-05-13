import { useState } from 'react'; // Benötigen wir für den Zustand des Menüs
import Link from 'next/link'; // Für die Navigation
// Importieren Sie hier Ihr Logo oder Titel, falls vorhanden

export default function Header() {
  // Zustand, um zu verfolgen, ob das mobile Menü geöffnet ist oder nicht
  const [isOpen, setIsOpen] = useState(false);

  // Funktion zum Umschalten des Menü-Zustands
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black via-red-600 to-yellow-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Ihr Logo oder Titel */}
        <Link href="/" className="text-xl font-bold">
          Mein Logo/Titel
        </Link>

        {/* Burger Icon (wird auf mittleren Bildschirmen versteckt) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {/* Ein einfaches Icon, z.B. 3 Linien */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigationslinks (werden auf kleinen Bildschirmen versteckt, auf mittleren Bildschirmen sichtbar) */}
        {/* Auf kleinen Bildschirmen (isOpen = true) wird das Menü absolut positioniert */}
        <nav className={`
          md:flex md:items-center md:space-x-6
          ${isOpen ? 'block absolute top-16 left-0 w-full bg-black p-4' : 'hidden'}
        `}>
          <Link href="/shop" className="block md:inline-block mt-2 md:mt-0 hover:text-gray-300">
            Shop
          </Link>
          <Link href="/kontakt" className="block md:inline-block mt-2 md:mt-0 hover:text-gray-300">
            Kontakt
          </Link>
          <Link href="/musik" className="block md:inline-block mt-2 md:mt-0 hover:text-gray-300">
            Musik
          </Link>
          <Link href="/info" className="block md:inline-block mt-2 md:mt-0 hover:text-gray-300">
            Info
          </Link>
        </nav>
      </div>
    </header>
  );
}