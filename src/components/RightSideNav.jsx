export default function RightSideNav({ values }) {
  return (
    <>
      <aside className={"position-fixed end-0 top-20"} style={{ width: "20%" }}>
        <h5 className={"mx-auto w-50"}>
          <u>{"On This Page"}</u>
        </h5>
        <ul className={"mx-auto w-50 h-auto"}>
          {values?.map((item, i) => (
            <li key={i}> {item} </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
