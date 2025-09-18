import { 
  SiUnity, 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact 
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";

// Map tech names to icons with colors close to their official logos
const techIcons = {
  React: <SiReact className="text-[#61DAFB] w-6 h-6" />,          // React blue
  "C++": <SiCplusplus className="text-[#00599C] w-6 h-6" />,      // C++ blue
  HTML: <SiHtml5 className="text-[#E34F26] w-6 h-6" />,           // HTML orange
  CSS: <SiCss3 className="text-[#1572B6] w-6 h-6" />,             // CSS blue
  JavaScript: <SiJavascript className="text-[#F7DF1E] w-6 h-6" />, // JS yellow
  Tailwindcss: <RiTailwindCssFill className="text-[#06B6D4] w-6 h-6" />, // Tailwind cyan
  Unity: <SiUnity className="text-[#000000] w-6 h-6" />,           // Unity black
};

export default techIcons;
