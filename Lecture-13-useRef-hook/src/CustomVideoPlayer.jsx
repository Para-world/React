import React, { useRef } from "react";

function CustomVideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const resetVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };

  return (
    <div className="p-6 bg-gray-900 text-white max-w-lg mx-auto rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Rohini Side Video Player</h2>
      
      <video
        ref={videoRef}
        width="100%"
        className="rounded mb-4"
        controls={false}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="space-x-3">
        <button onClick={playVideo} className="px-3 py-1 bg-green-600 rounded">▶ Play</button>
        <button onClick={pauseVideo} className="px-3 py-1 bg-yellow-500 rounded">⏸ Pause</button>
        <button onClick={rewindVideo} className="px-3 py-1 bg-blue-600 rounded">⏪ Rewind</button>
        <button onClick={forwardVideo} className="px-3 py-1 bg-purple-600 rounded">⏩ Forward</button>
        <button onClick={resetVideo} className="px-3 py-1 bg-red-600 rounded">🔄 Reset</button>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;
