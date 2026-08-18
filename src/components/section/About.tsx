// Display informations about the owner, allows visitors to get CV

import Button from "../ui/Button";
import frontDesktopIllustration from "../../assets/illustrations/working-desktop-front.svg";

function About() {
  return (
    <div className="relative flex-1 gap-8">
      <div className="relative z-10 mt-2 mb-12 flex max-w-[840px] flex-col gap-7">
        <h1 className="font-heading mb-2 text-[1.75rem]">
          <span className="text-accent-400">Full-Stack Web Developer</span> — Open to Jobs & Freelance Projects
        </h1>
		<p>
          I hold a French national certification in{" "}
          <span className="text-accent-400">Application Design & Development (CDA)</span>, equivalent to a
          Bachelor's degree, completed in 2026 at Wild Code School in Angoulême. I live in the south of Charente
          (Chalais) and am open to fully remote roles anywhere, or on-site/hybrid positions within a reasonable
          distance of home.
        </p>
        <p>
          I am currently looking for a <span className="text-accent-400">Front-end, Back-end, or Full-stack position</span> , and I'm also available for freelance web development
          projects — from small websites to full application features.
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
