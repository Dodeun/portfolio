// Landing page , displaying all 3 layout (Sidebar being fully visible or not depending on screen size)
import { useState } from "react";
import "./App.css";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Projects from "./components/section/Projects";
import Sidebar from "./components/layout/Sidebar";
import Navbar, { type TabType } from "./components/layout/Navbar";
import Drawer from "./components/ui/Drawer";
import Section from "./components/layout/Section";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <>
      <div className="bg-bg-primary-1000 medium:p-4 flex h-screen gap-4 p-2">
        <Section className="medium:flex hidden max-w-[412px] flex-2 overflow-y-auto">
          <Sidebar />
        </Section>
        <div className="medium:gap-4 flex flex-5 flex-col items-center justify-center gap-2">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Section className="overflow-y-auto">
            {activeTab === "about" && <About />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "projects" && <Projects />}
          </Section>
        </div>
      </div>
      <Drawer>
        <Sidebar />
      </Drawer>
    </>
  );
}

export default App;
