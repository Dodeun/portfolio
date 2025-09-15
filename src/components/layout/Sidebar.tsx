// Used to contact the portfolio's owner

import { useState } from "react";
import EmailIcon from "../icons/base-icons/EmailIcon";
import LinkedInIcon from "../icons/base-icons/LinkedIn";
import GithubIcon from "../icons/tech-icons/GithubIcon";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Sidebar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="text-text-primary-0 flex h-full flex-col items-center justify-between pt-2">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-bg-primary-1000 shadow-inner-md h-20 w-20 rounded-md"></div>
          <p>Jordan BURDON</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <Button variant="secondary" onClick={() => console.log("Email")}>
              <EmailIcon className="w-8" />
            </Button>
          </li>
          <li>
            <Button variant="secondary" onClick={() => console.log("Github")}>
              <GithubIcon className="w-8" />
            </Button>
          </li>
          <li>
            <Button variant="secondary" onClick={() => console.log("LinkedIn")}>
              <LinkedInIcon className="w-8" />
            </Button>
          </li>
        </ul>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
          <Input fieldType="text" fieldName="name" label="Name" input={name} setInput={setName} />
          <Input fieldType="email" fieldName="email" label="Email" input={email} setInput={setEmail} />
          <Input fieldType="textarea" fieldName="message" label="Message" input={message} setInput={setMessage} />
          <Button className="mt-4 !w-full" variant="primary" type="submit">
            Send
          </Button>
        </form>
      </div>
      <footer className="medium:self-center text-text-primary-100 self-start py-2 text-center text-[0.75rem]">
        <p>© 2025 Burdon J - Made with React & Tailwind</p>
        {/* <p>Privacy Policy</p> */}
      </footer>
    </div>
  );
}

export default Sidebar;
