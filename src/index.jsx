import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader";


export default function Gallery() {
  const items = [
      { type: "video", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646805/copy_F8920F0A-EE08-4671-845F-36FCD2120968_bflq7h.mov" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646799/DSC02922_2_uowiyc.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646799/DSC02818_ggchae.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646799/DSC02913_yx6koq.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646798/DSC02811_yl5xoo.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646798/DSC02486_4_xtrnkw.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646797/DSC02452_2_rhyhig.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646797/DSC02372_2_jzip98.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646797/DSC02432_3_mnkuaa.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646796/DSC02415_2_lxbgqn.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646797/DSC02427_3_s8rxjd.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646794/DSC02162_3_f6s0pi.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646794/DSC02261_ytgx3u.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646794/DSC02345_kqh88j.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646794/DSC02160_3_efkzkm.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646793/DSC02150_4_ca9e0n.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646792/DSC02136_2_dcby9o.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646793/DSC02154_3_ntaluz.jpg" },
      { type: "video", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646791/copy_8CC3A021-9579-4D09-B5BD-3E77A68CD59F_omqopp.mov" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646791/DSC02115_2_fotbha.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646791/DSC02110_4_gk4g10.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646791/DSC02119_2_y4vdwr.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646790/DSC02107_3_ebzzmc.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646790/DSC02112_2_jo7fr3.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646788/DSC02098_3_ashxn1.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646788/DSC02089_3_wwgyvk.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646787/DSC02095_3_g8v1lq.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646785/DSC02067_3_m3gvwp.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646785/DSC02065_3_ayiy0k.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646784/DSC02062_3_udv8qr.jpg" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646781/DSC02059_3_uqs93c.jpg" },
      { type: "video", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646781/1756144957780835_aycgvx.mp4" },
      { type: "image", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646781/DSC01987_6_jjoko2.jpg" },
      { type: "video", category: "automotive", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646778/copy_2529EC35-C780-4539-B28A-3872BE4A9C10_yn3m74.mov" },







    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646762/Afterfilms-1_2_rufa7d.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646762/Afterfilms-2_3_whrm1c.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646766/Afterfilms-3_ezr90s.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646766/Afterfilms-4_2_pfcptp.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646769/Afterfilms-6_ihll4i.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646769/Afterfilms-7_2_d5qbuc.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646803/IMG_7504_rbpnf5.jpg" },
    { type: "image", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646800/DSC04830_tddeoj.jpg" },
    { type: "video", category: "lifestyle", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646802/IMG_3678_j9jxms.mp4" },

   

    { type: "video", category: "events", src: "https://res.cloudinary.com/dftmvb0jt/video/upload/f_auto,q_auto/v1758646815/Client-8_xq7avu.mp4" },
    { type: "image", category: "events", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646801/IMG_3222_j4cxhk.jpg" },
    { type: "image", category: "events", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646800/DSC05924_jaqhca.jpg" },

    { type: "image", category: "corporate events", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646801/IMG_3224_feydlf.jpg" },
    { type: "image", category: "corporate events", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646804/IMG_3225_k7hdeu.jpg" },
    { type: "image", category: "corporate events", src: "https://res.cloudinary.com/dftmvb0jt/image/upload/f_auto,q_auto/v1758646801/IMG_3226_f8rfjm.jpg" },


  
  ];

  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
 

  const handleLoaded = (index) => {
    setLoadingItems((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

    const [loadingItems, setLoadingItems] = useState(
        Array(filteredItems.length).fill(true)
      );
      
  return (
    <div className="min-h-screen bg-[#3e2f56] text-white px-4 sm:px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center py-8 sm:py-10">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white">Emarq&apos;s </span>
        <span className="text-[#e8c1c5]">Gallery</span>
      </motion.h1>
    </div>
  
    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2">
      {["all", "automotive", "lifestyle", "events", "corporate events"].map((cat, index) => (
        <motion.button
          key={cat}
          onClick={() => setFilter(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`px-4 sm:px-5 py-2 rounded-full border text-sm sm:text-base font-medium transition 
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
          className="overflow-hidden rounded-lg sm:rounded-xl border-2 sm:border-4 border-[#e8c1c5]/70 shadow-lg cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          onClick={() => setSelectedItem(item)}
        >
          {item.type === "image" ? (
          <div className="relative w-full h-52 sm:h-60 md:h-72">
          {loadingItems[index] && <Loader />} {/* Show loader */}
          <img
            src={item.src}
            alt=""
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loadingItems[index] ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => handleLoaded(index)}
          />
        </div>
          ) : (
            <div className="relative w-full h-52 sm:h-60 md:h-72">
            {loadingItems[index] && <Loader />}
            <video
              src={item.src}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loadingItems[index] ? "opacity-0" : "opacity-100"
              }`}
              preload="none"
              onLoadedData={() => handleLoaded(index)}
            />
          </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  
    {/* Modal / Lightbox */}
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="w-full max-w-4xl p-2 sm:p-4 rounded-xl shadow-2xl flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt=""
                loading="lazy"
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg border border-[#e8c1c5]/80"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                preload="none"
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg border border-[#e8c1c5]/80"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  
  );
}
