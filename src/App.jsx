import React from "react";

// ۱. وارد کردن کامپوننت‌ها با حروف بزرگ
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Work from "./work";
import Contact from "./contact";

function App() {
  return (
    <div className="relative"> 
      
      {/* منوی ناوبری */}
      <Navbar />

      {/* بخش‌های اصلی سایت */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;
