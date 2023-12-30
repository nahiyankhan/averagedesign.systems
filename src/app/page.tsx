import Image from 'next/image'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        This is an Average Design System
      </h1>
    </main>
  )
}
