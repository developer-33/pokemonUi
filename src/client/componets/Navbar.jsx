import  { useState } from 'react';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');


  

  const navItems = [
    {
      name: 'Home',
      icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', // Bulbasaur icon
      page: 'home',
    },
    {
      name: 'Profile',
      icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', // Pikachu icon
      page: 'profile',
    },
    {
      name: 'Messages',
      icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', // Charizard icon
      page: 'messages',
    },
    {
      name: 'Pokédex',
      icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', // Mew icon
      page: 'pokedex',
    },
    {
      name: 'Search',
      icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', // Psyduck icon
      page: 'search',
    },
  ];

  return (
    <nav className="bg-yellow-500 px-4 py-2 shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl text-white font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="PokéLogo"
            className="w-40 inline-block"
          />
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setActivePage(item.page)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-red-500 transition-all ${
                  activePage === item.page ? 'bg-red-500' : 'bg-blue-500'
                }`}
              >
                <img src={item.icon} alt={`${item.name} Icon`} className="w-6 h-6" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;