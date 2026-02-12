import React, { useState } from 'react'

export const OnAndOff = () => {

  const [status, setStatus] = useState(false);

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
