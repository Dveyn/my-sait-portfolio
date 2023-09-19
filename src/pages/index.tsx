import { Photo } from "@@/components/layout/index";
import s from "./index.module.scss"
export default function Home() {
  return (
    <main>
      <section className={s.start_text}>
        <h1>Ананьев Дмитрий</h1>
        <h2>Frontend разработчик</h2>
      </section>

      <Photo />

    </main>
  )
}
