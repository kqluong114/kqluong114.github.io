import ContactInputField from "./ContactInputField";
const ContactSection = () => {
  return (
    <section id="contact">
      <div>
        <span>Contact Me</span>
      </div>
      <form
        className="flex flex-col m-auto md:flex-row max-w-[1000px] w-full justify-center bg-amber-50"
        action="submit"
      >
        <div className="gap-4">
          <div className="flex flex-col md:flex-row m-auto gap-2">
            <div className="flex flex-col m-auto align-middle gap-2 p-2 md:w-1/2">
              <ContactInputField placeholder="Name*" />
              <ContactInputField placeholder="Email*" />
              <ContactInputField placeholder="Subject*" />
            </div>
            <div className="p-2 md:w-1/2">
              <textarea
                className="bg-[oklch(.35_.02_274)] rounded-md p-2 max-w-lg w-full h-full"
                placeholder="Message*"
                required
                type="text"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          <div className="p-2">
            <button
              className="p-2 bg-pink-400 rounded max-w-lg w-full"
              type="submit"
              onClick={() => {
                console.log("button clicked");
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      <div>
        <span>Other Forms of Contact</span>
      </div>
      <div>
        <div>734-263-7860</div>
        <div>
          <a href="">Khanh1234409@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
