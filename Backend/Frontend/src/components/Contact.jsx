// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import MapComponent from "./MapComponent";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-blue-100 text-gray-800 p-16">
      
      {/* Header Section */}
      <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Have a question? Need help? Feel free to reach out to us! We’d love to hear from you. 💬
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 flex flex-col items-center">
          <FaPhoneAlt className="text-green-500 text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-600">+1 (234) 567-890</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 flex flex-col items-center">
          <FaEnvelope className="text-blue-500 text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-600">support@ebookstore.com</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 flex flex-col items-center">
          <FaMapMarkerAlt className="text-red-500 text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="text-gray-600">123 Book Street, Knowledge City</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-8 w-full max-w-4xl">
      {/* Contact Form */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Send us a message</h2>
        <form className="mt-5 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg transform transition hover:scale-105"
          >
            Send Message
          </button>
        </form>
        </div>
        <div className="mt-10 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <MapComponent />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex space-x-5">
        <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition"><FaFacebook /></a>
        <a href="#" className="text-blue-400 text-3xl hover:text-blue-600 transition"><FaTwitter /></a>
        <a href="#" className="text-pink-500 text-3xl hover:text-pink-700 transition"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Contact;
