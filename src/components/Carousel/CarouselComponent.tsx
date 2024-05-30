import { useState, useEffect } from 'react';

interface Slide {
  image: string;
  alt: string;
  buttonLink: string;
  buttonBehance: string;
  buttonTextBehance: string;
  buttonText: string;
}

export function Carousel({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map(({ image, alt, buttonLink, buttonBehance, buttonText, buttonTextBehance }, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <img className="w-full h-full object-cover pointer-events-none select-none" src={image} alt={alt} />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
            <a href={buttonLink} className="mt-2 inline-block" rel="noopener noreffer" target="_blank">
              <button className="w-[220px] h-[50px] bg-zinc-100 rounded-[50px] text-center text-black text-lg font-semibold font-['Inter'] hover:text-white hover:bg-transparent hover: border-[1.5px] transition-all duration-300">
                {buttonText}
              </button>
            </a>
            <a href={buttonBehance} className="mt-2 ml-8 inline-block" rel="noopener noreffer" target="_blank">
              <button id="behanceBtn" className="w-[120px] h-[50px] rounded-[50px] text-center text-white text-lg font-semibold border-none font-['Inter']">
                {buttonTextBehance}
              </button>
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="w-[50px] h-[50px] absolute left-8 top-1/2 transform -translate-y-1/2 bg-transperent border-[1.5px] text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
        className="w-[50px] h-[50px] absolute right-8 top-1/2 transform -translate-y-1/2 bg-transperent border-[1.5px] text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        &gt;
      </button>
    </div>
  );
}
