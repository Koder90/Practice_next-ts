import React from 'react'
import styles from './styles.module.css'
import { BiLogoGit, BiLogoReact, BiLogoJavascript, BiLogoCss3 } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'

export default function Skills() {
  return (
    <>
        <div className='mt-2'>
            <h3 className= "ml-5 mt-4 text-slate-300 underline text-xl">My skills</h3>
            <div className="flex flex-wrap bg-slate-400/50 mt-4 rounded-sm h-72">
              <BiLogoReact size={50} />
              <BiLogoNodejs size={50} />
              <BiLogoGit size={50} />
              <BiLogoJavascript size={50} />
              <BiLogoCss3 size={50} />
              </div>
            
        </div>
    </>
  )
}
