import React from "react";

// ایمپورت صحیح تصاویر با مسیر نسبی و بدون خط‌تیره در نام متغیرها
import FullstackImg from "./assets/portfolio.png";
import MaterialUiImg from "./assets/resume.png";
import TailwindPortfolioImg from "./assets/tailwind.png";

const Work = () => {
  // ۳ پروژه شما با عکس‌های اختصاصی خودتان:
  const projects = [
    {
      id: 1,
      title: "Full-Stack Web App",
      description: "Complete web application with frontend & backend integration",
      tech: "React, Node.js, Express, MySQL / REST API",
      image: FullstackImg, // تصویر پروژه فول‌استک شما
      demoUrl: "https://your-fullstack-demo.com", // لینک دمو یا '#'
      codeUrl: "https://github.com/baran6492-max/your-fullstack-repo",
    },
    {
      id: 2,
      title: "Material UI Portfolio",
      description: "Clean & modern responsive portfolio built with Material UI",
      tech: "React, Material UI (MUI), JavaScript",
      image: MaterialUiImg, // تصویر رزومه/پورتفولیو متریال یو‌آی شما
      demoUrl: "https://your-mui-portfolio-demo.com",
      codeUrl: "https://github.com/baran6492-max/your-mui-repo",
    },
    {
      id: 3,
      title: "Tailwind React Portfolio",
      description: "Sleek, fast and fully responsive developer portfolio",
      tech: "React, Tailwind CSS, Vite",
      image: TailwindPortfolioImg, // تصویر پروژه فعلی
      demoUrl: "#",
      codeUrl: "https://github.com/baran6492-max/your-current-portfolio-repo",
    },
  ];

  return (
    <section id="work" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-20 flex items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        {/* تیتر بخش */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#ccd6f6]">
            Work
          </p>
          <p className="py-4 text-gray-400">
            Check out some of my recent projects:
          </p>
        </div>

        {/* شبکه نمایش ۳ پروژه */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto bg-cover bg-center h-[280px] relative overflow-hidden border border-slate-800"
            >
              {/* لایه تیره در حالت هاور */}
              <div className="absolute inset-0 bg-[#0a192f]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                
                {/* عنوان پروژه */}
                <span className="text-lg font-bold text-white tracking-wider">
                  {item.title}
                </span>

                {/* توضیحات کوتاه */}
                <p className="text-xs text-gray-300 mt-1 px-2 line-clamp-2">
                  {item.description}
                </p>

                {/* تکنولوژی‌ها */}
                <span className="text-xs text-pink-400 font-mono mt-2 font-medium">
                  {item.tech}
                </span>

                {/* دکمه‌ها */}
                <div className="pt-5 flex gap-3">
                  {item.demoUrl !== "#" ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 bg-white text-gray-900 font-semibold text-xs rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="px-3 py-1.5 bg-gray-700/60 text-gray-400 text-xs rounded cursor-default">
                      Live Soon
                    </span>
                  )}

                  <a
                    href={item.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 border border-pink-500 text-pink-400 font-semibold text-xs rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
                  >
                    Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
