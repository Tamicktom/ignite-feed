import styles from "./Post.module.css";



export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/tamicktom;png" alt="" />
          <div>
            <strong>Tamicktom</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de maio de 2022 às 08:00"
          dateTime="2022-05-11 08:00:30"
        >
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Hoje vamos falar sobre...</p>
      </div>
    </article>
  );
}