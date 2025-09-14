import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Gallery() {
  const items = [
    { type: "image", category: "automotive", src: "https://picsum.photos/id/1018/400/300" },
    { type: "video", category: "lifestyle", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", category: "events", src: "https://picsum.photos/id/1015/400/300" },
    { type: "image", category: "automotive", src: "https://picsum.photos/id/1016/400/300" },
    { type: "image", category: "lifestyle", src: "https://picsum.photos/id/1018/400/300" },
    { type: "video", category: "events", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", category: "automotive", src: "https://picsum.photos/id/1015/400/300" },
    { type: "image", category: "lifestyle", src: "https://picsum.photos/id/1016/400/300" },
    { type: "image", category: "events", src: "https://picsum.photos/id/1018/400/300" },
    { type: "video", category: "automotive", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", category: "lifestyle", src: "https://picsum.photos/id/1015/400/300" },
    { type: "image", category: "events", src: "https://picsum.photos/id/1016/400/300" },
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
      {["all", "automotive", "lifestyle", "events"].map((cat, index) => (
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
