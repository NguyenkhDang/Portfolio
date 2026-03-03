import React, { useEffect } from 'react'
import { IconContext } from "react-icons";
import { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { ContactMe } from './ContactMe'
export const IntroParagraph = () => {
  const word = ["fun", "creative", "interactive"]
  const [text, setText] = useState("interactive")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
  const cycle = () => {
    let count = 0;
    setDeleting(false) 

    setTimeout(() => {
      setDeleting(true)
      setTimeout(() =>{
      if(count === 3) { count = 0}
      setText(word[count])
      count++;
    }, 1000) 
    }, 4000)

  }

  cycle()

  const interval = setInterval(cycle, 6000)

  return () => clearInterval(interval)
}, [])

  return (
    <div className='place-items-center mt-16'>
      <div className='grid grid-cols-2 w-5/6 border-8 place-items-center '>
        <div className='text-center'>
          <h1 className='text-5xl'>Hello, I'm Nguyen Dang</h1>
            <p className='text-2xl'>A 20-year-old working to become a Front-End Developer <br />
            I can make </p>
            <div className='block w-min m-auto'>
              <p className={`text ${deleting ? "delete" : ""}`}>{text}</p>
            </div>
            <p className='text-2xl'>customs components for website. </p>
        </div>
        <div>
          <ContactMe />
          <div className='grid grid-cols-7 mt-5'>
            <IconContext.Provider value={{size: "4em"}}>
              <div className='grid grid-rows-2'>
                <FaHtml5 title='HTML'/>
                <h1>3+ Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <FaCss3Alt title='CSS'/>
                <h1>2+ Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <IoLogoJavascript title='JavaScript'/>
                <h1>2+ Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <FaReact title='React'/>
                <h1>1+ Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <SiTypescript title='TypeScript'/>
                <h1>-1 Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <FaNodeJs title='NodeJS'/>
                <h1>-1 Year</h1>
              </div>
              <div className='grid grid-rows-2'>
                <SiVite title='Vite'/>
                <h1>-1 Year</h1>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
