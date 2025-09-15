// Landing page , displaying all 3 layout (Sidebar being fully visible or not depending on screen size)
import "./App.css";
import Button from "./components/ui/Button";
import Drawer from "./components/ui/Drawer";

{
  /* <h1 className="w-200 border-2 border-amber-400 bg-amber-950">TEST</h1> */
}
function App() {
  return (
    <div className="bg-bg-primary-900 flex min-h-screen items-center justify-center">
      {/* <div className="bg-accent-400 flex h-0.5 w-2xl max-w-[1704px] items-center"></div> */}
      <Drawer>SIDEBAR</Drawer>
    </div>
  );
}

export default App;
