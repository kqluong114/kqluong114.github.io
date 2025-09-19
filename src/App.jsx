import MenuBar from './components/MenuBar.jsx';
import { Outlet } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <div className="bg-[oklch(0.3_0.02_274)] text-white">
      <MenuBar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App
