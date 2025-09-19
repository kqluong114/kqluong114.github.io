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
    <section id="profile" className="py-16 scroll-mt-16">
      {/* Profile Image */}
      <div className="aspect-square max-w-md m-auto">
        <img
          className="rounded-full object-cover max-w-lg overflow-hidden h-full w-full"
          src={headshot}
          alt="Headshot of Khanh Luong"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col m-auto justify-center gap-8 my-4 text-center">
        <span className="min-w-2xs max-w-md text-4xl m-auto font-semibold">
          Khanh Luong
        </span>

        <div className="flex justify-center gap-2 flex-wrap">
          {/* Location */}
          <div className="flex gap-1 items-center">
            <IoLocationSharp />
            <span>Ypsilanti, MI</span>
            <GoDotFill className="text-pink-400" />
          </div>

          {/* Email */}
          <div className="flex gap-1 items-center">
            <IoMail />
            <a
              href="mailto:Khanh1234409@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Khanh1234409@gmail.com
            </a>
            <GoDotFill className="text-pink-400" />
          </div>

          {/* GitHub */}
          <div className="flex gap-1 items-center">
            <IoLogoGithub />
            <a
              className="text-blue-400 hover:underline"
              href="https://github.com/kqluong114"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Kqluong114
            </a>
            <GoDotFill className="text-pink-400" />
          </div>

          {/* LinkedIn */}
          <div className="flex gap-1 items-center">
            <IoLogoLinkedin />
            <a
              className="text-blue-400 hover:underline"
              href="https://linkedin.com/in/khanh-luong-4471561a1"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/Khanh-Luong
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
