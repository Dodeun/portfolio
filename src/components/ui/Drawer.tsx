import { useState } from "react";
import Button from "./Button";
import ArrowIcon from "../icons/base-icons/ArrowIcon";

// Used to display the Sidebar when the screen is too small
interface DrawerProps {
  children: React.ReactNode;
}

function Drawer({ children }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="medium:hidden">
      <div className="fixed right-3.5 bottom-4 z-50">
        <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
          <ArrowIcon className="w-8" />
        </Button>
      </div>

      <div
        className={`bg-bg-primary-900 fixed top-[8px] right-0 left-[8px] z-50 h-[calc(100vh-16px)] rounded-lg transition-transform ${
          isOpen ? "right-[8px] translate-x-0 shadow-md" : "translate-x-full"
        }`}
      >
        <div className="fixed right-2 bottom-2">
          <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
            <ArrowIcon className="bottom-0 w-8 rotate-180" />
          </Button>
        </div>
        <div className="h-full overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
