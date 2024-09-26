import { useState } from "react";
import PostModal from "./PostModal";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      user: 'Ash Ketchum',
      content: 'Just caught a new Pikachu!',
      pokemon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      user: 'Misty',
      content: 'Water Pokémon are the best!',
      pokemon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-4 flex-grow">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 mb-4 flex items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokéball"
          className="w-6 h-6 mr-2"
        />
        Add New Post
      </button>
      {posts.map((post, index) => (
        <Post key={index} user={post.user} content={post.content} pokemon={post.pokemon} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        addPost={addPost}
      />
    </div>
  );
};

export default Feed;