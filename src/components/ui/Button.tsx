interface ButtonProps {
  variant: "primary" | "secondary" | "nav";
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}

function Button({ variant, onClick, children, isActive }: ButtonProps) {
  const baseClasses = "font-heading text-center transition-colors";

  let classes = "";
  let disabled = false;

  switch (variant) {
    case "primary":
      classes =
        "bg-accent-500 hover:bg-accent-600 text-bg-primary-1000 px-10 py-1.5 text-lg shadow-sm hover:cursor-pointer rounded-sm";
      break;
    case "secondary":
      classes =
        "bg-bg-primary-1000 text-accent-500 hover:text-accent-600 p-1.5 shadow-inner-sm hover:cursor-pointer rounded-sm";
      break;
    case "nav":
      if (isActive) {
        classes = "bg-bg-primary-800 text-text-primary-0 cursor-default px-10 py-3 w-full shadow-md rounded-lg";
        disabled = true;
      } else {
        classes =
          "bg-bg-primary-900 text-text-primary-0 hover:text-accent-500 px-10 py-3 w-full shadow-md hover:cursor-pointer rounded-lg";
      }
      break;
  }
  return (
    <button className={`${baseClasses} ${classes}`} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
