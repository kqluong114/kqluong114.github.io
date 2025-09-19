const AboutMeSection = () => {
  return (
    <section id="about-me"  className="bg-(--color-shade-400) p-2 py-6 rounded-md flex flex-col gap-4 scroll-mt-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <h2 className="text-xl font-semibold">Software Engineer & Lifelong Learner</h2>
      </div>
      <div className="flex flex-col leading-relaxed text-left gap-6 p-2 sm:px-8">
        <p>
          I'm a passionate software engineer with a strong interest in building
          creative and interactive web applications. I enjoy exploring new technologies,
          improving my skills in full-stack development, and solving challenging problems.
        </p>
        <p>
          Outside of coding, I’m a dedicated language learner and an avid gamer.
          I love exploring different cultures through languages and immersing myself
          in rich, story-driven games. Balancing hobbies with learning keeps me motivated
          and constantly growing.
        </p>
        <p>
          My current focus is on developing scalable web applications with modern
          technologies like React, Tailwind CSS, and Node.js, while expanding my knowledge
          of game development and full-stack systems. I’m always looking for opportunities
          to collaborate, learn, and contribute to meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
