import styles from "./navhead.module.css";

export default function NavHeader({ responsiveExpanded, toggleResponsiveNav }) {
  return (
    <nav className={styles.header}>
      <h1 className='display-6'> {"LibCompare"} </h1>
      <div className="d-flex">
        <a
          target={"_blank"}
          href={"https://github.com/goyal-Dushi/style-compare"}
          style={{
            color: "black",
            fontSize: "30px",
          }}
          role={"button"}
          rel='noreferrer noopener'>
          <i className='bi bi-github'></i>
        </a>
        <div className={styles.responsiveNav}>
          <div onClick={toggleResponsiveNav}>
            <i className='bi bi-list'></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
