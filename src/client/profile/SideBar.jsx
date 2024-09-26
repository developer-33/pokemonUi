



const Sidebar = () => {
  return (
    <aside className="bg-yellow-400 h-screen p-4 flex flex-col space-y-6">
      <div className="text-center">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-20 mx-auto" />
        <h2 className="text-white text-xl">Trainer Profile</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="/feed-page" className="text-white font-bold hover:bg-red-500 p-2 rounded-md flex items-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="Mew" className="w-6 h-6 mr-2" />
          Feed
        </a>
        <a href="/explore-page" className="text-white font-bold hover:bg-red-500 p-2 rounded-md flex items-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-6 h-6 mr-2" />
          Explore
        </a>
        <a href="/friends-page" className="text-white font-bold hover:bg-red-500 p-2 rounded-md flex items-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-6 h-6 mr-2" />
          Friends
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;