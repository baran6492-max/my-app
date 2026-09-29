import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-20 flex items-center">
      
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 w-full">
        
        {/* تیتر بخش با خط زیرین امضادار */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#ccd6f6]">
            About Me
          </p>
        </div>

        {/* بخش اول: معرفی و باکس عکس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* ستون متن */}
          <div className="flex flex-col gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl font-semibold text-white">
              Hello! I'm <span className="text-pink-600">Razieh</span>, a passionate Web Developer.
            </p>
            <p>
              I love turning ideas and creative designs into functional, high-quality reality. My journey into web development started with a deep curiosity about how interactive things work on the internet.
            </p>
            <p>
              Today, I focus on crafting smooth, responsive interfaces where clean code meets thoughtful design. I enjoy finding solutions to layout challenges and learning new practices every single day.
            </p>
          </div>

          {/* ستون عکس / آواتار */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-2xl bg-[#112240] border-2 border-pink-600/70 p-2 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-pink-500 flex items-center justify-center overflow-hidden">
                {/* اگر عکس واقعی داشتید تگ img را جایگزین این متن کنید */}
                <div className="w-full h-full rounded-xl bg-pink-600/10 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-pink-600 font-bold text-lg mb-1">Razieh</span>
                  <span className="text-xs text-gray-400 font-mono">Frontend Developer</span>
                </div>
              </div>
              {/* کادر پشت زمینه برای افکت سه‌بعدی شیک */}
              <div className="absolute -bottom-3 -right-3 w-60 h-60 sm:w-64 sm:h-64 border-2 border-pink-600/30 rounded-2xl -z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
          </div>
        </div>

        {/* بخش دوم: My Story / رویکرد من */}
        <div className="bg-[#112240]/40 p-6 sm:p-8 rounded-xl border border-gray-800 mb-16">
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-600"></span>
            My Approach
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            I don’t just write code to make things look good; I focus on maintainability, readability, and responsiveness across all devices. Whether working with component hierarchies in React or writing utility classes in Tailwind and Bootstrap, my goal is always to deliver an effortless experience for the end user.
          </p>
        </div>

        {/* بخش سوم: دو ستون مهارت‌های کلیدی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#112240] rounded-xl border-t-2 border-pink-600/60 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-pink-500 font-mono">01.</span> Responsive UI Design
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting mobile-first layouts using Tailwind CSS and Bootstrap. I make sure websites adapt gracefully to smartphones, tablets, and wide screens.
            </p>
          </div>

          <div className="p-6 bg-[#112240] rounded-xl border-t-2 border-pink-600/60 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-pink-500 font-mono">02.</span> React & Component Architecture
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building reusable, modular components and handling state effectively with modern React hooks to keep applications clean and scalable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
