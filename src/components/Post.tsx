import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/tamicktom.png" />
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}