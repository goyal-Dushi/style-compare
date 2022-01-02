import styles from "./footer.module.css";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footerStyle}>
      <CopyrightSharpIcon /> {`style-compare ${date}`}
    </footer>
  );
}
