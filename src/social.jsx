
import { RiFacebookFill } from "react-icons/ri";
import { FaSquareInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa6"; // ترکیب ایمپورت‌ها
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {/* LinkedIn */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a className="flex justify-between items-center w-full text-white px-4" href="/">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        
        {/* GitHub */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a className="flex justify-between items-center w-full text-white px-4" href="/">
            Github <FaGithubSquare size={30} />
          </a>
        </li>

        {/* Instagram */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306C]">
          <a className="flex justify-between items-center w-full text-white px-4" href="/">
            Instagram <FaSquareInstagram size={30} />
          </a>
        </li>

        {/* Mail */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a className="flex justify-between items-center w-full text-white px-4" href="/">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
