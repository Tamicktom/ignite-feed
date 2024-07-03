import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

type CommentProps = {
  content: string;
  id: number;
  onDeleteComment: (id: number) => void;
}

export function Comment(props: CommentProps) {

  const handleDeleteComment = () => {
    props.onDeleteComment(props.id);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/tamicktom.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime='2022-05-11T08:13:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" type="button" onPointerDown={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}