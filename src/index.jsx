export default function Gallery() {
    const items = [
      { type: 'image', src: 'https://picsum.photos/id/1018/400/300' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://picsum.photos/id/1015/400/300' },
      { type: 'image', src: 'https://picsum.photos/id/1016/400/300' },
      { type: 'image', src: 'https://picsum.photos/id/1018/400/300' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://picsum.photos/id/1015/400/300' },
      { type: 'image', src: 'https://picsum.photos/id/1016/400/300' },
      { type: 'image', src: 'https://picsum.photos/id/1018/400/300' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { type: 'image', src: 'https://picsum.photos/id/1015/400/300' },
      { type: 'image', src: 'https://picsum.photos/id/1016/400/300' },
    ];
  
    return (
        <div>
        <div className="text-center my-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-black">Emarq's </span>
          <span className="text-purple-600">Gallery</span>
        </h1>
      </div>
      
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) =>
          item.type === 'image' ? (
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