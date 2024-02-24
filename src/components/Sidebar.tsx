import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://www.rocketseat.com.br/eventos/rsxp/_next/image?url=%2Feventos%2Frsxp%2Fassets%2Fimages%2Fspeakers%2Fdiego-fernandes.png&w=640&q=75"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <strong>Diego Fernandes</strong>
        <span>CTO at Rocketseat</span>
      </div>

      <footer>
        <a href="">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
