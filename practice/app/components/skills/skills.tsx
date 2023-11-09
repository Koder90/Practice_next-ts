import React from 'react'
import styles from './styles.module.css'
import { BiLogoGit, BiLogoReact } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'

export default function Skills() {
  return (
    <>
        <div>
            <h3 className={styles.title}>My skills</h3>
            <div className={styles.grid_container}>
              <BiLogoReact size={50} />
              <BiLogoNodejs size={50} />
              <BiLogoGit size={50} />
              </div>
            
        </div>
    </>
  )
}
