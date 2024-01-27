import Dashboard from "./Layouts/Dashboard";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import useDarkMode from "./utils/theme";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div>
        <div className='flex bg-customNeutral dark:custom-bg h-full w-full'>
          <div className='h-screen overflow-y-auto dark:bg-black hidden sm:block'>
            <SideBar setShowSideBar={setShowSideBar} />
          </div>
          <div
            className={`fixed top-0 w-2/3 z-30 h-screen ${
              showSideBar ? "left-0" : "left-[-100%]"
            } transition-[left] duration-500 ease-in`}>
            <SideBar setShowSideBar={setShowSideBar} />
          </div>

          <div className='flex-1 h-screen overflow-y-scroll'>
            <Routes>
              <Route
                path='/'
                element={
                  <Dashboard
                    setShowSideBar={setShowSideBar}
                    showSideBar={showSideBar}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
