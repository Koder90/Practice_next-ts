import React from 'react'
import styles from './styles.module.css'
import { BiLogoReact } from 'react-icons/bi'

export default function Skills() {
  return (
    <>
        <div>
            <h3 className={styles.title}>My skills</h3>
            <div className={styles.grid_container}><BiLogoReact /></div>
            
        </div>
    </>
  )
}
