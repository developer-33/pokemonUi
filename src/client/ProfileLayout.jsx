import React from 'react';

// Mock data for user profile
const userData = {
  name: 'Ash Ketchum',
  location: 'Pallet Town, Kanto',
  bio: "I'm Ash Ketchum from Pallet Town, and I'm aiming to become a Pokémon Master!",
  pokemonTeam: [
    { id: 25, name: 'Pikachu' },
    { id: 6, name: 'Charizard' },
    { id: 3, name: 'Venusaur' },
    { id: 9, name: 'Blastoise' },
    { id: 65, name: 'Alakazam' },
    { id: 149, name: 'Dragonite' },
  ],
  activities: [
    { id: 1, description: 'Caught a new Pokémon: Bulbasaur!' },
    { id: 2, description: 'Defeated Misty in a gym battle!' },
    { id: 3, description: 'Trained with Pikachu all day!' },
    { id: 4, description: 'Earned the Thunder Badge!' },
  ],
};

// Profile Header Component
const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-yellow-400 p-6 flex items-center space-x-6">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${user.pokemonTeam[0].id}.png`}
        alt="Trainer Avatar"
        className="w-32 h-32 rounded-full border-4 border-white"
      />
      <div>
        <h1 className="text-4xl font-bold text-white">{user.name}</h1>
        <p className="text-lg text-white">{user.location}</p>
      </div>
    </div>
  );
};

// About Section
const AboutSection = ({ bio }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
      <h2 className="text-2xl font-bold mb-2">About</h2>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

// Pokémon Team Component
const PokemonTeam = ({ team }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">Pokémon Team</h2>
      <div className="grid grid-cols-3 gap-4">
        {team.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex flex-col items-center text-center bg-blue-100 p-4 rounded-lg shadow-md hover:scale-105 transform transition-all"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className="w-20 h-20"
            />
            <span className="mt-2 font-bold text-gray-700">
              {pokemon.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Activity Feed Component
const ActivityFeed = ({ activities }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-100 transition-all"
          >
            {activity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Profile Layout Component
const ProfileLayout = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <ProfileHeader user={userData} />
      <AboutSection bio={userData.bio} />
      <PokemonTeam team={userData.pokemonTeam} />
      <ActivityFeed activities={userData.activities} />
    </div>
  );
};

export default ProfileLayout;
