// Used to display either the about section, Skills or Projects
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

function Section({ className, children }: SectionProps) {
  return (
    <div
      className={`${className} bg-bg-primary-900 text-text-primary-0 font-body flex w-full flex-1 flex-col rounded-lg p-4 shadow-md`}
    >
      {children}
    </div>
  );
}

export default Section;
