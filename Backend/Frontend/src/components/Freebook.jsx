// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { motion } from "framer-motion";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Free Offered Books 📚
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Enjoy exciting and valuable books for free!
        </p>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Slider {...settings} className="p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-xl">
          {book.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-4"
            >
              <Cards item={item} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Freebook;
