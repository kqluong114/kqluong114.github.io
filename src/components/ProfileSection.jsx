import headshot from "../assets/headshot.jpg"
const ProfileSection = () => {
  return (
    <>
      <div className="overflow-hidden size-auto mask-circle m-auto">
        <img src={headshot} alt="" />
      </div>
      <div className="block p-4">Khanh Luong</div>
      <div className="block">
        <span>Software Engineer</span>
        <span>Khanh1234409@gmail.com | <a href="https://github.com/kqluong114">Khanh Luong</a> | <a href="linkedin.com/in/khanh-luong-4471561a1">Khanh Luong</a></span>
      </div>
    </>
  );
}

export default ProfileSection;