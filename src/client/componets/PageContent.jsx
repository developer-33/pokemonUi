const PageContent = ({ activePage }) => {
    return (
      <div className="mt-16 p-4">
        {activePage === 'home' && <div>Welcome to the Pokémon World! 🌍</div>}
        {activePage === 'profile' && <div>This is your Trainer Profile! 👤</div>}
        {activePage === 'messages' && <div>Check your messages here! 💬</div>}
        {activePage === 'pokedex' && <div>Explore the Pokédex! 📖</div>}
        {activePage === 'search' && <div>Search for Pokémon! 🔍</div>}
      </div>
    );
  };

  export default PageContent;
