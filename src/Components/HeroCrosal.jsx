
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Poco_F7 from "../assets/Poco_F7.jpg";
import Poco_F7_Ultra from '../assets/Poco_F7_Ultra.jpg';
import Mobile_poco_banner from '../assets/Products/poco_banner.webp';
import Mobile_poco_banner2 from '../assets/Products/POCO_X7_Pro.webp';

const HeroCrosal = () => {
    const desktopImages = [Poco_F7, Poco_F7_Ultra];
    const mobileImages = [Mobile_poco_banner, Mobile_poco_banner2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = isMobile ? mobileImages : desktopImages;
    const imageClasses = isMobile ? 'w-full h-[36vh] object-top' : 'w-full h-[90%]';

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const time = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(time);
    }, [nextSlide]); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 400); 
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[90%] overflow-hidden select-none">
            <div className="absolute w-full hidden md:flex overflow-x-auto md:justify-end md:pr-4 lg:pr-64 items-center py-4 md:py-7 gap-4 md:gap-10 bg-transparent text-white z-10">
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer" to="/product">POCO F7 PRO ULTRA</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f7-pro">POCO F7 PRO</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f7-pro-5g">POCO F7 PRO 5G</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-c75">POCO C75</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-m6-pro">POCO M6 PRO</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f6-pro">POCO F6 PRO</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f6">POCO F6</Link>
                <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-x6-pro-5g">POCO X6 PRO 5G</Link>
            </div>

            {/* Image Container with Smooth Sliding */}
            <div 
                className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`${imageClasses} object-cover flex-shrink-0`}
                    />
                ))}
            </div>

            {/* Left Arrow - Hidden on Mobile */}
            <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute hidden md:flex left-4 top-1/2 hover:text-amber-300 transform -translate-y-1/2 text-white cursor-pointer transition-colors duration-200 hover:scale-110 disabled:opacity-50"
            >
                <ChevronLeft size={50} />
            </button>

            {/* Right Arrow - Hidden on Mobile */}
            <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute hidden md:flex right-4 top-1/2 hover:text-amber-300 transform -translate-y-1/2 text-white cursor-pointer transition-colors duration-200 hover:scale-110 disabled:opacity-50"
            >
                <ChevronRight size={50} />
            </button>

            {/* Dots - Always visible */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:opacity-50 ${
                            index === currentIndex ? 'bg-amber-300' : 'bg-white'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCrosal;

