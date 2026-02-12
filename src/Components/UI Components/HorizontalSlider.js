import React, { useState } from 'react'

export const HorizontalSlider = () => {

  const [value, setValue] = useState(0)
  return (
    <div className='grid grid-rows-2'>
      {value}
      <input type='range' min={0} max={100} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
