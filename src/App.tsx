import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, type PostProps } from "./components/Post";

interface PostType extends PostProps {
  id: number;
}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/tamicktom.png",
      name: "Tamicktom",
      role: "Web Developer"
    },
    publishedAt: new Date("2022-05-11 08:00:30"),
    content: [
      {
        type: "paragraph",
        content: "Fala galera"
      },
      {
        type: "paragraph",
        content: "Hoje vamos falar sobre..."
      },
      {
        type: "link",
        content: "https://www.google.com"
      }
    ]
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/tamicktom.png",
      name: "Tamicktom",
      role: "Web Developer"
    },
    publishedAt: new Date("2022-05-11 08:00:30"),
    content: [
      {
        type: "paragraph",
        content: "Fala galera"
      },
      {
        type: "paragraph",
        content: "Hoje vamos falar sobre..."
      },
      {
        type: "link",
        content: "https://www.google.com"
      }
    ]
  }
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}