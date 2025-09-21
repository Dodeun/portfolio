// Display informations about the owner, allows visitors to get CV

import Button from "../ui/Button";
import frontDesktopIllustration from "../../assets/illustrations/working-desktop-front.svg";

function About() {
  return (
    <div className="relative flex-1 gap-8">
      <div className="relative z-10 mt-2 mb-12 flex max-w-[840px] flex-col gap-7">
        <h1 className="font-heading mb-2 text-[1.75rem]">
          Looking for a <span className="text-accent-400">Web Development Internship</span> (Dec 2025 – Mar 2026)
        </h1>
        <p>
          I am currently training as a <span className="text-accent-400">Full stack Developer</span> at Wild Code
          School, a program I started in February 2024 in Angoulême. I live in the south of Charente but am willing to
          relocate temporarily within certain parts of France for my internship, or work fully remotely if possible.
        </p>
        <p>
          I am seeking a 3-month internship from <span className="text-accent-400">08/12/2025 to 13/03/2026</span>, open
          to Front-end, Back-end, or Full-stack positions to complete my certification requirements.
        </p>
        <p>
          During my training, I have worked on <span className="text-accent-400">various projects</span> that allowed me
          to develop skills in web interface creation, back-end development, and agile project management.
        </p>
        <p>
          <span className="text-accent-400">Curious</span>, <span className="text-accent-400">autonomous</span>, and{" "}
          <span className="text-accent-400">motivated</span>, I am eager to apply my knowledge in a professional
          environment, learn from experienced developers, and actively contribute to real-world projects.
        </p>
        <a href="/portfolio/CV-Jordan-Burdon.pdf" download>
          <Button variant="primary">Download CV</Button>
        </a>
      </div>
      <div className="verylarge:block absolute right-1 bottom-1 hidden">
        <img className="w-[25vw] max-w-[450px] min-w-[250px]" src={frontDesktopIllustration} alt="Illustration" />
      </div>
    </div>
  );
}

export default About;
