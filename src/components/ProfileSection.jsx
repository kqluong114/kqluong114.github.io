import {
  IoLocationSharp,
  IoLogoLinkedin,
  IoMail,
  IoLogoGithub,
} from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import headshot from "../assets/headshot.jpg";

const ProfileSection = () => {
  return (
    <section id="profile" className="py-10 scroll-mt-16">
      <div className="overflow-hidden size-auto m-auto">
        <img src={headshot} alt="" />
      </div>
      <div className="flex flex-col m-auto justify-center align-middle">
        <span className="p-4 min-w-2xs max-w-md text-4xl m-auto font-semibold">
          Khanh Luong
        </span>
        <div className="flex justify-center gap-1 flex-wrap">
          <div className="flex gap-1 items-center">
            <IoLocationSharp />
            <span>Ypsilanti - MI</span>
            <GoDotFill className="text-pink-400" />
          </div>
          <div className="flex gap-1 items-center">
            <IoMail />
            <span className="text-blue-400">Khanh1234409@gmail.com</span>
            <GoDotFill className="text-pink-400" />
          </div>
          <div className="flex gap-1 items-center">
            <IoLogoGithub />
            <a className="text-blue-400" href="https://github.com/kqluong114">
              @Kqluong114
            </a>
            <GoDotFill className="text-pink-400" />
          </div>
          <div className="flex gap-1 items-center">
            <IoLogoLinkedin />
            <a
              className="text-blue-400"
              href="linkedin.com/in/khanh-luong-4471561a1"
            >
              /in/Khanh-Luong
            </a>
          </div>
        </div>
        {/* <span>Software Engineer</span> */}
      </div>
    </section>
  );
};

export default ProfileSection;
