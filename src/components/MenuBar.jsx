import "../App.css";
// import { MagnifyingGlassIcon, StarIcon, FilmIcon } from "@heroicons/react/16/solid";
// import useThrottleFetch from "../hooks/useThrottleFetch";
// import SearchRecommend from "./SearchReccomend.jsx";

function MenuBar() {
  const menuItems = ["Profile", "About Me", "Projects", "Contact"];

  return (
    <div className="flex h-12 gap-10 m-auto bg-[oklch(.3_.02_274)]/90 backdrop-blur-xs backdrop:brightness-0 px-4 py-2 fixed top-0 left-0 z-10 justify-center w-full items-center">
      {menuItems.map((item) => (
        <a
          href={`#${item.replace(" ", "-").toLowerCase()}`}
          className="transition-all duration-250 hover:text-pink-300 border-b-2 border-transparent hover:border-pink-300"
          key={item}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default MenuBar;
