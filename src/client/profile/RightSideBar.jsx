const RightSidebar = () => {
  return (
    <aside className="bg-yellow-400 h-screen p-4 space-y-4">
      <h2 className="text-white font-bold text-xl">Friends Online</h2>
      <div className="flex items-center space-x-4">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Charizard" className="w-10 h-10" />
        <span className="text-white">Brock</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="Venusaur" className="w-10 h-10" />
        <span className="text-white">Professor Oak</span>
      </div>
    </aside>
  );
};

export default RightSidebar;