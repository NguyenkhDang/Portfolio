import React from 'react'
import { OnAndOff } from './UI Components/OnAndOff'
import { HorizontalSlider } from './UI Components/HorizontalSlider'
import { CircleSlider } from './UI Components/CircleSlider'
import { ButtonUI } from './UI Components/ButtonUI'
import { MiniMenus } from './UI Components/MiniMenus'
import { LoadingBar } from './UI Components/LoadingBar'
export const UISpotlight = () => {
  return (
    <div className='text-center'>
      <h1 className="text-center text-5xl py-5">UI elements</h1>
      <div className='grid grid-rows-2 grid-cols-[0.25fr_0.25fr_0.25fr] place-items-center justify-center'>
        <div className="border-2 p-24"><OnAndOff /></div>
        <div className="border-2 p-24"><HorizontalSlider /></div>
        <div className="border-2 p-24"><CircleSlider /></div>
        <div className="border-2 p-24"><ButtonUI /></div>
        <div className="border-2 p-20"><MiniMenus /></div>
        <div className="border-2 p-24"><LoadingBar /></div>
      </div>
    </div>
  )
}
