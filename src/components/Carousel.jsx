import { useState } from "react";

export const Carousel = ({ images = [], onImageClick = () => {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 处理点击指示点
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  // 处理触摸开始
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  // 处理触摸移动
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  // 处理触摸结束
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // 向左滑动，但在最后一页时不执行
      if (currentIndex < images.length - 1) {
        setCurrentIndex((prev) => (prev + 1));
      }
    }

    if (touchStart - touchEnd < -75) {
      // 向右滑动，但在第一页时不执行
      if (currentIndex > 0) {
        setCurrentIndex((prev) => (prev - 1));
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center" onClick={(e) => {
      e.stopPropagation();
    }}>
      {/* 指示点放在图片区域上方，使用普通文档流布局 */}
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-14 mb-6 items-center h-5 w-fit">
          {images.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 text-white w-8 h-8 ${
                currentIndex === index
                  ? " bg-[#14B4DC] shadow-[0_2px_0_#036093]"
                  : " bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="h-[1px] w-[80%] bg-[#4D4D4D] mb-6"></div>
      </div>

      {/* 图片容器 */}
      <div className="relative overflow-hidden h-[200px] flex items-center justify-center mt-4 w-[100%]">
        <div
          className="flex w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.3s ease-in-out",
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 flex flex-col items-center justify-center"
            >
              <div className="w-full text-center py-2 flex items-center justify-center gap-2 text-xs h-4 mb-6">
                <div className="bg-[#14B4DC] text-white w-4 h-4 text-sm rounded-full leading-4">
                  {index + 1}
                </div>
                {image.title}
              </div>
              <div
                className="flex items-center justify-center bg-[#B3B3B3] w-full"
                onClick={() => {
                  onImageClick(image);
                }}
              >
                <img
                  src={image.img}
                  alt={`Slide ${index + 1}`}
                  className="h-40 object-contain"
                
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
