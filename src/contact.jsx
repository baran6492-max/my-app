import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 bg-[#1a1a1a]">
      <div className="max-w-[600px] w-full">
        
        {/* عنوان فرم */}
        <div className="pb-8 text-center">
          <p className="text-gray-300 text-3xl font-bold">Contact Form</p>
        </div>

        {/* شروع فرم - دقت کن که همه چیز داخل این فرم است */}
        <form 
          method="POST" 
          action="https://formspree.io/f/mjgqbplp" 
          className="flex flex-col gap-4"
        >
          
          {/* فیلد نام */}
          <div className="flex flex-col">
            <label className="text-gray-400 mb-1 ml-1">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="bg-[#8BFFFF] text-gray-900 p-3 rounded-md outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* فیلد ایمیل (اضافه کردم چون برای فرمسپری ضروری است) */}
          <div className="flex flex-col">
            <label className="text-gray-400 mb-1 ml-1">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="bg-[#8BFFFF] text-gray-900 p-3 rounded-md outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* فیلد پیام */}
          <div className="flex flex-col">
            <label className="text-gray-400 mb-1 ml-1">Message</label>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={6} 
              required
              className="bg-[#8BFFFF] text-gray-900 p-3 rounded-md outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            ></textarea>
          </div>

          {/* دکمه ارسال */}
          <button 
            type="submit" 
            className="mt-4 bg-transparent border-2 border-[#8BFFFF] text-[#8BFFFF] hover:bg-[#8BFFFF] hover:text-gray-900 font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            Send Information
          </button>

        </form> 
        {/* پایان فرم */}

      </div>
    </div>
  );
};

export default Contact;
