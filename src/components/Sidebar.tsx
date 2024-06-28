//* Libraries imports
import { PencilLine } from "@phosphor-icons/react";

//* Local imports
import styles from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://www.rocketseat.com.br/eventos/rsxp/_next/image?url=%2Feventos%2Frsxp%2Fassets%2Fimages%2Fspeakers%2Fdiego-fernandes.png&w=640&q=75"
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="http://github.com/tamicktom.png" />

        <strong>Diego Fernandes</strong>
        <span>CTO at Rocketseat</span>
      </div>

      <footer>
        <a href="/">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
