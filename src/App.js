import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <div className="app">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
