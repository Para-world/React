import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">React Like Button</h2>
      <button
        onClick={() => setLiked(!liked)}
        className={`px-4 py-2 rounded text-white font-medium transition ${
          liked ? 'bg-green-500 hover:bg-green-600' : 'bg-pink-500 hover:bg-pink-600'
        }`}
      >
        {liked ? 'Liked ✅' : 'Like ❤️'}
      </button>
    </div>
  );
}

export default LikeButton;