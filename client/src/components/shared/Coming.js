// src/ComingSoonPage.js
import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">Coming Soon ...</h1>
      <p className="text-white text-lg mb-8">
        Stay tuned!
      </p>
      
      

      <button className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-400 transition duration-300">
        Notify Me
      </button>

      <footer className="mt-8 text-purple-500">
        <p>© 2024 Trustopay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
