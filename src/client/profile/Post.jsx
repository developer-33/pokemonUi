const Post = ({ user, content, pokemon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-4">
        <img src={pokemon} alt="Pokemon Avatar" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-bold text-lg">{user}</h3>
          <p className="text-sm text-gray-600">Posted just now</p>
        </div>
      </div>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default Post;
