
import  { useState, useEffect } from 'react';
import { HomeIcon, BookOpenIcon, ChatIcon, StarIcon, GlobeAltIcon } from '@heroicons/react/solid';
import pokeballSound from '/src/assets/Pokémon Theme Song.mp3'; // Ensure you have a pokeball sound file

export default function PokemonNavbar() {
  const [pokemon, setPokemon] = useState(null);
  const [trainer, setTrainer] = useState({
        name: "Ash Ketchum",
        avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        badges: ['thunder', 'rain', 'earth']
  });

  useEffect(() => {
    async function fetchPokemon() {
      const randomId = Math.floor(Math.random() * 151) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setPokemon({
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default,
      });
    }
    fetchPokemon();
  }, []);

  const playPokeballSound = () => {
    const audio = new Audio(pokeballSound);
    audio.play();
  };

  return (
    <div>

   {/* <Pokedex /> */}



  
 
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 h-screen">
      <nav className="bg-gray-800 shadow-lg rounded-b-lg border-b border-gray-600">
        <div className="container mx-auto p-5 flex justify-between items-center">
          <div className="text-white font-semibold text-xl flex items-center">
            {pokemon ? (
              <img
                src={pokemon.sprite}
                alt={pokemon.name}
                className="w-12 h-12 mr-2 transition-transform duration-300 transform hover:scale-110"
              />
            ) : (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu"
                className="w-12 h-12 mr-2 transition-transform duration-300 transform hover:scale-110"
              />
            )}
            <span className="tracking-wider text-lg">Pokémon World</span>
          </div>

          <div className="flex space-x-8 text-white text-md">
            <a href="/" className="flex items-center transition duration-200 p-2 rounded-lg hover:bg-gray-700 hover:shadow-md">
              <HomeIcon className="w-5 h-5 mr-2" />
              Home
            </a>
            <a href="pokemon" className="flex items-center transition duration-200 p-2 rounded-lg hover:bg-gray-700 hover:shadow-md">
              <BookOpenIcon className="w-5 h-5 mr-2" />
              Pokédex
            </a>
            <a href="/login" className="flex items-center transition duration-200 p-2 rounded-lg hover:bg-gray-700 hover:shadow-md">
              <StarIcon className="w-5 h-5 mr-2" />
                Login
            </a>
            <a href="messages" className="flex items-center transition duration-200 p-2 rounded-lg hover:bg-gray-700 hover:shadow-md">
              <ChatIcon className="w-5 h-5 mr-2" />
              Community
            </a>
            <a href="#" className="flex items-center transition duration-200 p-2 rounded-lg hover:bg-gray-700 hover:shadow-md">
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              World Map
            </a>
          </div>

          <div className="relative group" onClick={playPokeballSound}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="Pokéball"
              className="w-12 h-12 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <div className="absolute right-0 hidden group-hover:block bg-white text-black p-4 rounded-lg shadow-lg mt-2 transition duration-200 ease-in-out">
              <p className="font-semibold text-md">Trainer Menu</p>
              <ul>
                <li className="hover:bg-gray-200 p-2 rounded-lg mt-1 transition duration-200">Profile</li>
                <li className="hover:bg-gray-200 p-2 rounded-lg mt-1 transition duration-200">Settings</li>
                <li className="hover:bg-gray-200 p-2 rounded-lg mt-1 transition duration-200">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center mt-12 space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={trainer.avatar}
            alt="Trainer Avatar"
            className="w-28 h-28 rounded-full border-4 border-yellow-600 shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <div className="text-white">
            <p className="font-semibold text-xl">{trainer.name}</p>
            <p className="text-sm">Pokémon Trainer</p>
          </div>
        </div>

        <div className="flex space-x-4">
        {trainer.badges.map((badge) => (
      
    <img
  key={badge}
  src={`https://storage.cloud.google.com/bucket3315/Pokemon/images.jpg`}
  alt={`${badge} Badge`}
  className="w-10 h-10 transition-transform duration-300 transform hover:scale-110"/>
))}

           </div>
        </div>
      </div>
    </div>
  );    
}