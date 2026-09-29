import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section id="home" className="w-full min-h-screen bg-[#0a192f] text-white flex items-center py-16">
      
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full">
        
        <p className="text-pink-600 text-base sm:text-lg font-mono mb-2">
          Hi, my name is
        </p>
        
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] tracking-tight">
          Razieh
        </h1>
        
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0] mt-2">
          I'm a Web Developer.
        </h2>

        <p className="text-gray-400 py-4 max-w-[700px] text-base sm:text-lg leading-relaxed">
          I am passionate about building modern, responsive, and user-friendly web interfaces. 
          My technical foundation includes <span className="text-[#ccd6f6] font-medium">React</span>, <span className="text-[#ccd6f6] font-medium">Tailwind CSS</span>, and <span className="text-[#ccd6f6] font-medium">Bootstrap</span>, 
          which I use to bring designs to life. I am constantly learning, writing clean code, 
          and eager to take on new challenges to create meaningful web experiences.
        </p>

        {/* دکمه اکشن با هاور روان و چرخش/حرکت آیکون */}
        <div className="pt-4">
          <button className="group flex items-center gap-3 px-6 py-3.5 border-2 border-pink-600 text-pink-600 font-semibold rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300">
            View My Work
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <HiArrowNarrowRight size={22} />
            </span>
          </button>
        </div>

      </div> 
    </section>
  );
};

export default Home;
