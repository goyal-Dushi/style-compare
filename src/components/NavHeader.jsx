import styles from "./navhead.module.css";

export default function NavHeader() {
  return (
    <nav className={styles.header}>
      <h1 className='display-6'> {"LibCompare"} </h1>
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
    </nav>
  );
}
