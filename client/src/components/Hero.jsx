import React from 'react'
import wallpaper from '../assets/wallpaper.webp'

const Hero = () => {
  return (
    <div 
            className="relative bg-cover bg-top h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white px-4" 
            style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
       
            <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 lg:px-12 py-8">
            
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Discover Your Style
                </h1>

                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
                    Shop the latest trends with amazing deals and discounts.
                </p>

                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Hero