// Used to display either the about section, Skills or Projects
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

function Section({ className, children }: SectionProps) {
  return (
    <div
      className={`${className} bg-bg-primary-900 text-text-primary-0 font-body scrollbar flex w-full flex-1 flex-col overflow-y-auto rounded-lg p-3 shadow-md`}
    >
      {children}
    </div>
  );
}

export default Section;
