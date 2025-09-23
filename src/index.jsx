import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Gallery() {
  const items = [
      { type: "video", category: "automotive", src: "./autovideo.mp4" },
      { type: "video", category: "automotive", src: "./copy_8CC3A021-9579-4D09-B5BD-3E77A68CD59F.mov" },
      { type: "video", category: "automotive", src: "./copy_2529EC35-C780-4539-B28A-3872BE4A9C10.mov" },
      { type: "video", category: "automotive", src: "./copy_F8920F0A-EE08-4671-845F-36FCD2120968.mov" },
      { type: "image", category: "automotive", src: "./DSC01987 6.jpg" },
      { type: "image", category: "automotive", src: "./DSC02059 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02062 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02065 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02067 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02088 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02095 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02098 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02107 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02110 4.jpg" },
      { type: "image", category: "automotive", src: "./DSC02112 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02115 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02119 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02136 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02142 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02150 4.jpg" },
      { type: "image", category: "automotive", src: "./DSC02160 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02162 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02261.jpg" },
      { type: "image", category: "automotive", src: "./DSC02345.jpg" },
      { type: "image", category: "automotive", src: "./DSC02372 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02415 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02427 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02432 3.jpg" },
      { type: "image", category: "automotive", src: "./DSC02452 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02486 4.jpg" },
      { type: "image", category: "automotive", src: "./DSC02811.jpg" },
      { type: "image", category: "automotive", src: "./DSC02818.jpg" },
      { type: "image", category: "automotive", src: "./DSC02913.jpg" },
      { type: "image", category: "automotive", src: "./DSC02922 2.jpg" },
      { type: "image", category: "automotive", src: "./DSC02415 2.jpg" },







    { type: "image", category: "lifestyle", src: "./Afterfilms-1 2.jpeg" },
    { type: "image", category: "lifestyle", src: "./Afterfilms-2 3.jpeg" },
    { type: "image", category: "lifestyle", src: "./Afterfilms-3 2.jpeg" },
    { type: "image", category: "lifestyle", src: "./Afterfilms-4 2.jpeg" },
    { type: "image", category: "lifestyle", src: "./Afterfilms-6 2.jpeg" },
    { type: "image", category: "lifestyle", src: "./Afterfilms-7 2.jpeg" },
    { type: "image", category: "lifestyle", src: "./DSC04827.jpg" },
    { type: "image", category: "lifestyle", src: "./DSC04830.jpg" },
    { type: "video", category: "lifestyle", src: "./IMG_3678.mp4" },

   

    { type: "video", category: "events", src: "./Client-8.mp4" },
    { type: "image", category: "events", src: "./DSC05924.jpg" },
    { type: "image", category: "events", src: "./IMG_3222.jpg" },

    { type: "image", category: "corporate events", src: "./IMG_3224.jpg" },
    { type: "image", category: "corporate events", src: "./IMG_3225.jpg" },
    { type: "image", category: "corporate events", src: "./IMG_3226.jpg" },


  
  ];

  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#3e2f56] text-white">
    <div className="text-center py-10">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white">Emarq&apos;s </span>
        <span className="text-[#e8c1c5]">Gallery</span>
      </motion.h1>
    </div>

    {/* Filter Buttons */}
    <div className="flex justify-center gap-4 mb-10">
      {["all", "automotive", "lifestyle", "events", "corporate events"].map((cat, index) => (
        <motion.button
          key={cat}
          onClick={() => setFilter(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`px-5 py-2 rounded-full border font-medium transition 
            ${
              filter === cat
                ? "bg-[#e8c1c5] text-[#3e2f56] border-transparent shadow-md"
                : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
            }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </motion.button>
      ))}
    </div>

    {/* Gallery Grid */}
    <motion.div
      className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {filteredItems.map((item, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-xl border-4 border-[#e8c1c5]/70 shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          onClick={() => setSelectedItem(item)}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt=""
              className="w-full h-60 object-cover"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-60 object-cover"
            />
          )}
        </motion.div>
      ))}
    </motion.div>

    {/* Modal / Lightbox */}
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="max-w-4xl w-full p-4 rounded-xl bg-[#3e2f56] shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt=""
                className="w-full h-auto rounded-lg  border-[#e8c1c5]/80"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full h-auto rounded-lg border-2 border-[#e8c1c5]/80"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
}
