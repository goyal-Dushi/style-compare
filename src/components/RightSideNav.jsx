import styles from './rightSideNav.module.css';
export default function RightSideNav({ values, scrollRef }) {
  return (
    <>
      <aside className={styles.rightSideNav} style={{ width: "20%" }}>
        <h5 className={"mx-auto w-50"}>
          <u>{"On This Page"}</u>
        </h5>
        <div
          id={"rightNav"}
          className={"mx-auto w-50 h-auto ps-0 list-group list-group-flush"}>
          {values?.map((item, i) => (
            <a key={i} className={"list-group-item"} href={scrollRef[i]}>
              {item}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
