import Link from "next/link"
import styles from './styles.module.css'

export default function Navbar (){
    return (
        <nav className={styles.nav}>
            <h1 className={styles.item}>Home</h1>
            <Link href="/about" style={{textDecoration:"none", color: "black"}}><h1 className={styles.item}>About</h1></Link>
            <Link href="/projects"><h1 className={styles.item}>Projects</h1></Link>
        </nav>
    )
}