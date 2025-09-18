import { 
  SiTailwindcss, 
  SiUnity, 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact 
} from "react-icons/si";

// Just an object, no function needed
const techIcons = {
  react: <SiReact className="text-sky-400" />,
  cplusplus: <SiCplusplus className="text-blue-600" />,
  html: <SiHtml5 className="text-orange-500" />,
  css: <SiCss3 className="text-blue-500" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  tailwindcss: <SiTailwindcss className="text-teal-400" />,
  unity: <SiUnity className="text-black" />,
};

export default techIcons;
