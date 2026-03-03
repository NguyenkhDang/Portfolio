import { IntroParagraph } from "./Components/IntroParagraph";
import { Project } from "./Components/Project";

import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`m-0 p-0 ${darkMode ? "homeDarkmode": ""}`}>
      <div className={`text-4xl columns-2 py-5 bg-[#b8dedc] border-b-4 ${darkMode ? "navDarkmode": ""}`}>
        <h1 className="font-bold text-blue-500 ml-20">Nguyen Dang</h1>
        <button onClick={() => setDarkMode(!darkMode)}><FaLightbulb /></button>
        <div className="columns-2 mr-20 float-right">
          <ul>
            <li>
              <a href="#project">My Project</a>
            </li>
            <li>
              <a href="#contactMe">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>

      <IntroParagraph/>
      <Project/>
    </div>
  );
}

export default App;
