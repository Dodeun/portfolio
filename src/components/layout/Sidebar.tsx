// Used to contact the portfolio's owner

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkedInIcon from "../icons/base-icons/LinkedIn";
import GithubIcon from "../icons/tech-icons/GithubIcon";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Sidebar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
    } else {
      emailjs.sendForm("service_cbsdry7", "template_g47jlyw", form.current!, "oq5jZ1Rr0RIHH4oqW").then(
        () => {
          alert("Message sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong, please try again later.");
        },
      );
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="text-text-primary-0 flex h-full flex-col items-center justify-between pt-2">
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-bg-primary-1000 shadow-inner-md h-18 w-18 rounded-md"></div>
          <p>Jordan BURDON</p>
          <p className="text-text-primary-100">burdon.jordan@gmail.com</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <Button variant="secondary" onClick={() => handleOpenLink("https://github.com/Dodeun")}>
              <GithubIcon className="w-6" />
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              onClick={() => handleOpenLink("https://www.linkedin.com/in/jordan-burdon-5681a6b8/")}
            >
              <LinkedInIcon className="w-6" />
            </Button>
          </li>
        </ul>
        <form ref={form} onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
          <Input fieldType="text" fieldName="name" label="Name" input={name} setInput={setName} />
          <Input fieldType="email" fieldName="email" label="Email" input={email} setInput={setEmail} />
          <Input fieldType="textarea" fieldName="message" label="Message" input={message} setInput={setMessage} />
          <Button className="mt-4 !w-full" variant="primary" type="submit">
            Send
          </Button>
        </form>
        <p className="text-[0.85rem]">Informations sent through this form are only used to respond to your message.</p>
      </div>
      <footer className="medium:self-center text-text-primary-100 self-start py-2 text-center text-[0.75rem]">
        <p>© 2025 Burdon J - Made with React & Tailwind</p>
        {/* <p>Privacy Policy</p> */}
      </footer>
    </div>
  );
}

export default Sidebar;
