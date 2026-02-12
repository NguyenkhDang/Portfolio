import React from 'react'
import { useState } from 'react'
export const MiniMenus = () => {

  const [active, setActive] = useState(false)
  return (
    <div>
      {active && 
        <div className='grid grid-cols-3 gap-8'>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
          <button>Button 5</button>
          <button>Button 6</button>
        </div>} 


      <button className={`${active ? "mt-32" : ""}`}onClick={() => setActive(!active)}>{active ? "Collapse" : "Expand"}</button>
    </div>
  )
}
