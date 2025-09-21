interface ButtonProps {
  variant: "primary" | "secondary" | "nav";
  onClick?: () => void;
  children: React.ReactNode;
  isActive?: boolean;
  type?: "submit";
  className?: string;
}

function Button({ variant, onClick, children, isActive, type, className }: ButtonProps) {
  const baseClasses = `${className} font-heading text-center transition-colors font-semibold`;

  let classes = "";
  let disabled = false;

  switch (variant) {
    case "primary":
      classes =
        "bg-accent-500 hover:bg-accent-600 text-bg-primary-1000 w-full sm:w-fit px-10 py-1.5 text-lg hover:shadow-sm hover:cursor-pointer rounded-sm";
      break;
    case "secondary":
      classes =
        "bg-bg-primary-1000 text-accent-500 hover:text-accent-600 p-1.5 shadow-inner-sm hover:cursor-pointer rounded- hover:bg-bg-primary-800 rounded-sm";
      break;
    case "nav":
      if (isActive) {
        classes = "bg-bg-primary-800 text-text-primary-0 cursor-default px-2 py-3 w-full shadow-md rounded-lg";
        disabled = true;
      } else {
        classes =
          "bg-bg-primary-900 text-text-primary-0 hover:text-accent-500 px-2 py-3 w-full shadow-md hover:cursor-pointer rounded-lg";
      }
      break;
  }
  return (
    <button
      type={type}
      className={`${baseClasses} ${classes}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
