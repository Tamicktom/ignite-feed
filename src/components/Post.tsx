import { useState, type FormEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

type Author = {
  avatar_url: string;
  name: string;
  role: string;
}

type Content = {
  type: "paragraph" | "link";
  content: string;
};

export type PostProps = {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post(props: PostProps) {
  const [comments, setComments] = useState<string[]>([
    "Primeiro comentário",
    "Segundo comentário",
    "Terceiro comentário",
  ]);

  const publishedDateFormated = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    //* Verify if the event target is a form element
    if (event.currentTarget instanceof HTMLFormElement) {
      const formData = new FormData(event.currentTarget);
      const comment = formData.get("comment");

      //* Verify if the comment is a string
      if (comment && typeof comment === "string") {
        setComments((prevComments) => [...prevComments, comment]);
        event.currentTarget.reset();
      }
    }
  }

  function deleteComment(index: number) {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments.splice(index, 1);
      return newComments;
    });
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatar_url} />
          <div>
            <strong>{props.author.name}</strong>
            <span>{` ${props.author.role}`}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          props.content.map((item, index) => {
            const key = `content-${index}`;
            return (<Content key={key} content={item} />);
          })
        }
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          id="comment"
          name="comment"
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment, index) => {
            const key = `comment-${index}`;
            return (
              <Comment
                key={key}
                id={index}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })
        }
      </div>
    </article>
  );
}

type ContentProps = {
  content: Content;
}

function Content(props: ContentProps) {
  if (props.content.type === "paragraph") {
    return <p>{props.content.content}</p>;
  }
  return <a href={props.content.content}>{props.content.content}</a>;
}