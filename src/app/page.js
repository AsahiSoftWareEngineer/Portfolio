import { AboutComponent } from '@/components/about';
import { SkillsComponent } from '@/components/skills';
import { WorksComponent } from '@/components/works';
import Image from 'next/image'
import styles from "../styles/app/index.module.css";

export default function Home() {
  return (
    <main >
      <section className={styles.top}>
        <h2>Nothingness is beautiful</h2>
        <p>I am software developer based in japan</p>
        <span className={styles.bar}>
          <span className={styles.ball}></span>
        </span>
      </section>
      <AboutComponent/>
      <SkillsComponent/>
      <WorksComponent/>
    </main>
  )
}
