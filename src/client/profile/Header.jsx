

// Header Component with Pokéball buttons
const Header = () => {
  return (
    <header className="bg-yellow-500 p-4 flex items-center justify-between">
      <h1 className="text-white text-3xl font-bold">PokéConnect</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" 
            alt="Pokéball"
            className="w-6 h-6 mr-2"
          />
        Login
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" 
            alt="Pokéball"
            className="w-6 h-6 mr-2"
          />
          Signup
        </button>
      </div>
    </header>
  );
};
export default Header;