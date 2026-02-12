import React, { useEffect } from 'react'
import { useState } from 'react'
import Profile2 from "../Images/profilePic2.jpg"
export const IntroParagraph = () => {
  const word = ["fun", "creative", "interactive"]
  const [text, setText] = useState("interactive")
  const [deleting, setDeleting] = useState(false)

  let count = 0;
  useEffect(() => {
  const cycle = () => {
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
      <div className='grid grid-cols-[0.25fr_0.75fr] w-5/6 border-8'>
        <div className='drop-shadow-2xl'>
          <img
            src={Profile2}
            className="max-h-64 w-auto justify-self-center"
            alt="profile-picture"
          />
        </div>
        <div className='text-center'>
          <h1 className='text-5xl'>{"<h1>Frontend Developer</h1>"}</h1>
            Hello, My name is Nguyen <br />
            A web developer who can make 
            <div className='block w-min m-auto'>
              <p className={`text ${deleting ? "delete" : ""}`}>{text}</p>
            </div>
            customs components for website. 
        </div>
      </div>
    </div>
  )
}
