
  

import  { useState, useEffect } from 'react';
import Post from './Post';
const PostModal = ({ isOpen, onClose, addPost }) => {
  const [message, setMessage] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  // Fetch Pokémon list from PokéAPI
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(res => res.json())
      .then(data => setPokemonList(data.results));
  }, []);

  const handleSubmit = () => {
    if (!selectedPokemon) return;
    
    // Generate the image URL using the Pokémon ID
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`;

    addPost({
      user: 'You',
      content: message,
      pokemon: pokemonImage,
    });

    setMessage('');
    setSelectedPokemon(null);
    onClose();
  };

  const handlePokemonSelect = async (e) => {
    const selectedName = e.target.value;

    // Fetch detailed Pokémon data to get the ID
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedName}`);
    const data = await response.json();

    // Store both the name and ID of the selected Pokémon
    setSelectedPokemon({
      name: data.name,
      id: data.id,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="border w-full p-2 rounded mb-4"
        />
        <select
          onChange={handlePokemonSelect}
          className="border w-full p-2 rounded mb-4"
        >
          <option value="">Select Pokémon</option>
          {pokemonList.map((poke, index) => (
            <option key={index} value={poke.name}>
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          Post
        </button>
        <button
          onClick={onClose}
          className="ml-4 text-gray-600 px-4 py-2 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PostModal;
