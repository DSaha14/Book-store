// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Cards from "./Cards";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            We are delighted to have you Here! 😊
          </h1>
          <p className="text-lg text-gray-100 mt-4 italic">Aa gya hai toh padh bhi lena 📚</p>

          {/* Back Button */}
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-200 duration-300"
            >
              ⬅️ Back
            </motion.button>
          </Link>
        </motion.div>

        {/* Books Grid Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {book.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Cards item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Course;
