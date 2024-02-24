import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            title="Hello, World!"
            content="This is my first post!"
          />
        </main>
      </div>
    </div>
  )
}

type PostProps = {
  title: string;
  content: string;
}

function Post(props: PostProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}