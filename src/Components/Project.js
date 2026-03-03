import { FaReact} from "react-icons/fa"; //https://react-icons.github.io/react-icons/
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Project1 from "../Images/Project1.png"
import Project2 from "../Images/Project2.png"
import Project3 from "../Images/Project3.png"
import Project4 from "../Images/Project4.png"
import Project5 from "../Images/Project5.png"
export const Project = ({darkMode}) => {
  return (
    <section id="project">
      <h1 className="text-center text-5xl py-5">My Project</h1>
      <div className='grid grid-rows-4 gap-32'>
        <div className='grid grid-cols-[0.55fr_0.45fr] w-11/12 mx-auto h-min border-2 p-3'>
          <img src={Project1} alt='Project1' className='w-full'/>
          <div className='w-full'>
            <h1 className={`text-5xl text-center text-blue-500 font-bold py-10 ${darkMode ? "bg-[#2f5f5c]" : "bg-[#b8dedc]"} `}>Clicker Counter</h1>
            <p className='text-xl py-4 ps-6 '>A clicker counter with every 100 clicks, a live update to the page happen</p>
            <ul>
              <h1 className='text-center text-2xl bg-[#d34bd3] w-10/12 m-auto'>Include:</h1>
              <div className='w-9/12 m-auto text-2xl'>
                <li>Timer counting upward</li>
                <li>Math question generator</li>
                <li>Simon says memory game</li>
                <li>Embedded YouTube video</li>
                <li>Audio player</li>
                <li>Mouse-only interaction</li>
              </div>
            </ul>
            <div className="grid grid-cols-2 place-items-center justify-center mt-6">
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                <a href='https://github.com/NguyenkhDang/counting' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </IconContext.Provider>
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaReact title='React'/>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[0.55fr_0.45fr] w-11/12 mx-auto h-min border-2 p-3'>
          <img src={Project2} className="pl-0.5" alt='Project2'/>
          <div className='w-full'>
            <h1 className={`text-5xl text-center text-blue-500 font-bold py-10 ${darkMode ? "bg-[#2f5f5c]" : "bg-[#b8dedc]"} `}>Restaurant Page</h1>
            <p className='text-xl py-4 ps-6'>A Restaurant Page featuring multiple pages such as Home Page, Menus Page and Reservation Page.</p>
            <ul>
              <h1 className='text-center text-2xl bg-[#d34bd3] w-10/12 m-auto'>Include:</h1>
              <div className='w-9/12 m-auto text-2xl'>
                <li>Reservation Form that is send to Google Sheet</li>
                <li>Resuable components such as Nav Bar and Footer</li>
                <li>Custom Menus and Logo using Canvas</li>
                <li>Multi-page navigation </li>
              </div>
            </ul>
             <div className="grid grid-cols-2 place-items-center justify-center mt-6">
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                <a href='https://github.com/NguyenkhDang/Restaurant-Website'target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </IconContext.Provider>
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaReact title='React'/>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[0.55fr_0.45fr] w-11/12 mx-auto h-min border-2 p-3'>
          <img src={Project3} alt='Project3'/>
          <div className='w-full'>
            <h1 className={`text-5xl text-center text-blue-500 font-bold py-10 ${darkMode ? "bg-[#2f5f5c]" : "bg-[#b8dedc]"} `}>Todo Task / Kankanboard</h1>
            <p className='text-xl py-4 ps-6'>A simple task manager, with adding task to columns such as, Todo, Pending, and Completed</p>
            <ul>
              <h1 className='text-center text-2xl bg-[#d34bd3] w-10/12 m-auto'>Include:</h1>
              <div className='w-9/12 m-auto text-2xl'>
                <li>Drag and Drop feature using @dnd-kit</li>
                <li>Task can includes what Code Language and the task status</li>
                <li>Ability to delete tasks</li>
                <li>Status task organization</li>
              </div>
            </ul>
            <div className="grid grid-cols-2 place-items-center justify-center mt-6">
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                <a href='https://github.com/NguyenkhDang/kankanboard' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </IconContext.Provider>
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaReact title='React'/>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[0.55fr_0.45fr] w-11/12 mx-auto h-min border-2 p-3'>
          <img src={Project4} alt='Project4'/>
          <div className='w-full'>
            <h1 className={`text-5xl text-center text-blue-500 font-bold py-10 ${darkMode ? "bg-[#2f5f5c]" : "bg-[#b8dedc]"} `}>Expense Tracker</h1>
            <p className='text-xl py-4 ps-6'>An expense tracker that allow user to track their income and expenses with categories. Visual finacial piechart with data from back-end</p>
            <ul>
              <h1 className='text-center text-2xl bg-[#d34bd3] w-10/12 m-auto'>Include:</h1>
              <div className='w-9/12 m-auto text-2xl'>
                <li>REST API built with Express and NodeJs</li>
                <li>Add income and expenses entries</li>
                <li>Categorize expenses</li>
              </div>
            </ul>
            <div className="grid grid-cols-3 place-items-center justify-center mt-6">
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                <a href='https://github.com/NguyenkhDang/Expense-Tracker' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </IconContext.Provider>
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaReact title='React'/>
              </IconContext.Provider>
              <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaNodeJs title='NodeJS'/>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[0.55fr_0.45fr] w-11/12 mx-auto h-min border-2 p-3'>
            <img src={Project5} alt='Project1' className='w-full'/>
            <div className='w-full'>
              <h1 className={`text-5xl text-center text-blue-500 font-bold py-10 ${darkMode ? "bg-[#2f5f5c]" : "bg-[#b8dedc]"} `}>Bookmark App</h1>
              <p className='text-xl py-4 ps-6'>A simple bookmark app, link to URL you want to keep</p>
              <ul>
                <h1 className='text-center text-2xl bg-[#d34bd3] w-10/12 m-auto'>Include:</h1>
                <div className='w-9/12 m-auto text-2xl'>
                  <li>Add bookmarks with URL and name</li>
                  <li>Search bookmarks by name (live search)</li>
                  <li>Delete bookmarks</li>
                  <li>Fully connected frontend + backend</li>
                  <li>Deployed backend on Render</li>
                  <li>Environment variable configuration for backend API</li>
                </div>
              </ul>
              <div className="grid grid-cols-4 place-items-center justify-center mt-6">
                <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <a href='https://github.com/NguyenkhDang/BookMark' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </IconContext.Provider>
                <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                    <SiVite title='Vite'/>
                </IconContext.Provider>
                <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <FaNodeJs title='NodeJS'/>
                </IconContext.Provider>
                <IconContext.Provider value={{size: "4em", style: {display: "inline-block"}}}>
                  <SiTypescript title='TypeScript'/>
                </IconContext.Provider>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
