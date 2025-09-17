const ContactInputField = ({placeholder}) => {
  return (
    <>
      <input className="bg-[oklch(.35_.02_274)] rounded-md p-2 max-w-lg w-full h-full" placeholder={placeholder} required type="text" />
    </>
  )
}

export default ContactInputField;