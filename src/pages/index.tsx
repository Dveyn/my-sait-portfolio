import { Photo } from "@@/components/layout/index";
import s from "./index.module.scss"
export default function Home() {
  return (
    <main>
      <section className={s.start_text}>
        <div className={s.center_block}>
          <h1 className={s.title}>Ананьев Дмитрий</h1>
          <h2 className={s.pretitle}>Frontend разработчик</h2>
        </div>
      </section>
      <Photo />
    </main>
  )
}
