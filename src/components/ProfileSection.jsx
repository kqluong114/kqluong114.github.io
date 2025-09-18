import headshot from "../assets/headshot.jpg"
const ProfileSection = () => {
  return (
    <div className="py-10">
      <div className="overflow-hidden size-auto m-auto">
        <img src={headshot} alt="" />
      </div>
      <div className="flex flex-col m-auto justify-center align-middle">
        <span className="p-4 min-w-2xs max-w-md text-4xl m-auto">Khanh Luong</span>
        <div className="flex justify-center gap-1 flex-wrap">
          <span>Ypsilanti - MI | </span>
          <span>Khanh1234409@gmail.com | </span>
          <a href="https://github.com/kqluong114">@Kqluong114 | </a>
          <a href="linkedin.com/in/khanh-luong-4471561a1">/in/Khanh-Luong</a>
        </div>
        {/* <span>Software Engineer</span> */}
      </div>
    </div>
  );
}

export default ProfileSection;