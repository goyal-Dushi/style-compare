export default function Home() {
  return (
    <div className={"w-75"}>
      <h1 className={"display-3 fw-bold"}> {"Welcome to style-compare"} </h1>
      <p className={"fs-5"}>
        {
          "The purpose of this documentation was to provide a one stop solution to all those Frontend Engineers and Developers out there to compare and evaluate differences in styling provided by various CSS lib like Material UI, Bootstrap, and much more"
        }
        <br />
        <br />
        {
          "While developing a website using CSS lib, it is very difficult to decide which one to use, since each has their own uniqueness. Thus, I used to view documentation for each of the lib, comparing design and style differences across their components. It took a lot of my time in this."
        }
        <br />
        <br />
        {"And thus, I came up with this documentation.."}
      </p>
      <h3 className={"display-3 fw-bold"}> {"Aim"} </h3>
      <p className={"fs-5"}>
        {
          "My aim is to develop a doc which can allow comparison of various components and styles across all the styling libraries out there so you can visit just one place to view the styles you want and get started with."
        }
      </p>
    </div>
  );
}
