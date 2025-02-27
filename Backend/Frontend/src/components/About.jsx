// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBookOpen, FaUsers, FaGlobe, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 p-16">
      {/* Header Section */}
      <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-16 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">
          About Our E-Book Store
        </h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Welcome to our digital book haven! 📚 We offer a vast collection of {" "}
          <span className="text-pink-400">fiction, non-fiction, academic, and self-improvement books</span> to cater to every reader. Our mission is to make reading {" "}
          <span className="text-pink-400">accessible, enjoyable, and innovative.</span>
        </p>
      </div>
      

      

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105">
          <FaBookOpen className="text-blue-500 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-center">Wide Book Collection</h3>
          <p className="text-gray-600 text-center">Explore thousands of e-books from different genres.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105">
          <FaUsers className="text-purple-500 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-center">Community of Readers</h3>
          <p className="text-gray-600 text-center">Join a network of book lovers & share insights.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105">
          <FaGlobe className="text-green-500 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-center">Read Anywhere</h3>
          <p className="text-gray-600 text-center">Access books from any device, anytime.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105">
          <FaStar className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-center">Top-rated Content</h3>
          <p className="text-gray-600 text-center">We offer curated content from best-selling authors.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-10">
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg text-lg font-semibold shadow-lg transform transition hover:scale-105"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default About;
