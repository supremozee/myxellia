import Image from "next/image";
import React, { useEffect, useState } from "react";
import Overlay from "../Overlay";

interface CarouselProps {
  image: string[];
  showDots?: boolean;
  hot: string;
  description: string;
}
const Carousel = ({ image, showDots, hot, description }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const handleImageSlide = (newIndex: number) => {
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      handleImageSlide((index + 1) % image.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className="relative w-full h-[286px]">
      <Overlay/>
      {image.map((img, i) => {
        return (
          <div
            className={`absolute w-full h-full transition-all duration-1000 ease-in ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
            key={img}
          >
            <Image
              src={img}
              alt={hot}
              priority={index === i}
              fill
              className="image bg-center object-cover rounded-[12px]"
            />
          </div>
        );
      })}
      <div className="flex flex-col z-20 relative justify-end pl-[16px] pb-[25px] h-full">
        <h3 className="text-white uppercase text-[14px] font-medium">{hot}</h3>
        <p className="text-white font-semibold text-[18px]">{description}</p>
        <div className="flex gap-2 justify-center mt-2">
          {showDots && (
            <>
              {Array.from(image, (_, i) => {
                const isActive = index === i;
                return (
                  <div
                    className={` rounded-full flex gap-2 w-2 h-2 ${
                      isActive ? "bg-white" : "bg-gray-400"
                    }`}
                    key={i}
                  ></div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
<style jsx>{`
// .image {
// position:relative;
//  animation: slide, 2s, ease-in, 1s, infinity, 
// }
// @keyframes slide {
// from( left: 10);
// to(right:10)
}
`}</style>;

export default Carousel;
