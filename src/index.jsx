import React, { useState } from "react";

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

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-black">Emarq's </span>
          <span className="text-purple-600">Gallery</span>
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["all", "automotive", "lifestyle", "events"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) =>
          item.type === "image" ? (
            <img
              key={index}
              src={item.src}
              alt=""
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <video
              key={index}
              src={item.src}
              controls
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          )
        )}
      </div>
    </div>
  );
}
