// src/ComingSoonPage.js
import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-purple-500 flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-6xl font-bold text-white mb-4">Coming Soon</h1>
      <p className="text-white text-lg mb-8">
        Stay tuned!
      </p>
      
      

      <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition duration-300">
        Notify Me
      </button>

      <footer className="mt-8 text-white">
        <p>© 2024 Trustopay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
