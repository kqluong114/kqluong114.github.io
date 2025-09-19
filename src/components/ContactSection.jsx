import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16 py-12 w-full max-w-[1000px] mx-auto"
    >
      <h1 className="pb-6 text-3xl font-semibold text-center">Contact Me</h1>

      {/* Contact Form */}
      <form
        className="flex flex-col md:flex-row gap-4 w-full h-[500px] bg-shade-500 p-6 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        {/* Left Side - Input Fields */}
        <div className="flex flex-col gap-3 md:w-1/2">
          <input
            className="bg-[oklch(.35_.02_274)] rounded-md p-2 w-full"
            placeholder="Name*"
            required
            type="text"
          />
          <input
            className="bg-[oklch(.35_.02_274)] rounded-md p-2 w-full"
            placeholder="Email*"
            required
            type="email"
          />
          <input
            className="bg-[oklch(.35_.02_274)] rounded-md p-2 w-full"
            placeholder="Subject*"
            required
            type="text"
          />

          {/* Inline contact info (only visible on md and up) */}
          <div className="hidden md:flex flex-col gap-2 pt-4 text-md">
            <div className="flex items-center gap-2">
              <FaPhone className="h-4 w-4" />
              <span>734-263-7860</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="h-4 w-4" />
              <a
                href="mailto:Khanh1234409@gmail.com"
                className="hover:underline"
              >
                Khanh1234409@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IoLogoLinkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Message Box */}
        <textarea
          className="bg-[oklch(.35_.02_274)] rounded-md p-2 w-full h-full md:w-1/2 resize-none"
          placeholder="Message*"
          required
        ></textarea>
      </form>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-pink-400 text-white font-medium rounded-md shadow hover:bg-pink-500 transition-all duration-250 w-full max-w-[500px]"
      >
        Send Message
      </button>

      {/* Other Contact Options */}
      <div className="mt-10 md:invisible bg-shade-400 rounded-lg p-6">
        <h2 className="pb-3 text-xl font-semibold">Other Ways to Reach Me</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaPhone className="h-5 w-5" />
            <span>734-263-7860</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="h-5 w-5" />
            <a href="mailto:Khanh1234409@gmail.com" className="hover:underline">
              Khanh1234409@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IoLogoLinkedin className="h-5 w-5" />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
