import React from "react";
// ایمپورت کردن آیکون‌ها
import HtmlIcon from "./assets/html5.svg";
import CssIcon from "./assets/css.svg";
import JavaScriptIcon from "./assets/javascript.svg";
import BootstrapIcon from "./assets/bootstrap.svg";
import ReactIcon from "./assets/reactjs.svg";
import tailwindcssIcon from "./assets/tailwindcss.svg";
import MaterialUILogo from "./assets/ui-material.png"; // اصلاح نام متغیر (بدون خط تیره)

const Skill = () => {
  return (
    <section id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16 flex items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#ccd6f6]">
            Skills
          </p>
          <p className="py-4 text-gray-400">
            These are the core technologies and tools I work with daily:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-6">
          
          {/* کارت HTML */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={HtmlIcon} alt="HTML logo" />
            <p className="mt-4 font-semibold text-gray-200">HTML5</p>
          </div>

          {/* کارت CSS */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={CssIcon} alt="CSS logo" />
            <p className="mt-4 font-semibold text-gray-200">CSS3</p>
          </div>

          {/* کارت JavaScript */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={JavaScriptIcon} alt="JS logo" />
            <p className="mt-4 font-semibold text-gray-200">JavaScript</p>
          </div>

          {/* کارت React */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={ReactIcon} alt="React logo" />
            <p className="mt-4 font-semibold text-gray-200">React</p>
          </div>

          {/* کارت Tailwind */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={tailwindcssIcon} alt="Tailwind logo" />
            <p className="mt-4 font-semibold text-gray-200">Tailwind CSS</p>
          </div>

          {/* کارت Bootstrap */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={BootstrapIcon} alt="Bootstrap logo" />
            <p className="mt-4 font-semibold text-gray-200">Bootstrap</p>
          </div>

          {/* کارت Material-UI */}
          <div className="bg-[#112240] pt-6 pb-4 rounded-lg shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-600/20 transition-all duration-300">
            <img className="w-16 h-16 object-contain mx-auto" src={MaterialUILogo} alt="Material UI logo" />
            <p className="mt-4 font-semibold text-gray-200">Material UI</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;
