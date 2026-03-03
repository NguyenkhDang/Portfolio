
import { IconContext } from 'react-icons'; // https://react-icons.github.io/react-icons/
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const ContactMe = () => {
  return (
    <div id='contactMe' className='text-center text-2xl'>
      <h1>Contact Me</h1>
      <div className='grid grid-cols-2 justify-center leading-10 '>
        <div className='border-2 px-2'>
          <h1>📍Address</h1>
          <p>Minnesota, United States</p>
        </div>
    
        <div className='border-2'>
          <h1>🔎 Social</h1>
          <div className='flex gap-10 justify-self-center pb-2'>
            <IconContext.Provider value={{size: "2em", style: {display: "inline-block"}}}>
              <a href='https://github.com/NguyenkhDang' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
            </IconContext.Provider>
            
            <IconContext.Provider value={{size: "2em", style: {display: "inline-block"}}}>
              <a href='https://www.linkedin.com/in/nguyen-dang-82b944254/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
