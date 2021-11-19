export default function Home() {
  return (
    <div className={"w-75"}>
      <h1 className={"display-3 fw-bold"}> {"Welcome to style-compare"} </h1>
      <p className={"fs-5"}>
        {
          "Before getting started why you should be referring to this doc in future whenever you want to use CSS Libraries in you next project, I would like to draw you attention the very aim of this documention. Why did I even started with this doc."
        }
        <br />
        <br />
        {
          "Well, the answer is pretty simple and yet could be only understood by experienced Frontend Engineers"
        }
        <br />
        <br />
        {
          "While I was using CSS Lib in my project, I found that there are many to select from, Material UI, Bootstrap, Tailwind CSS and many more to name. Mostly, in your career as a Frontend Developer, you will be working with either of the three. But it is good to have the knowledge of other styling lib since they might provide you with certain features out of the box."
        }
        <br />
        <br />
        {
          "To support my answer, while I was making a project for my client, the theme or color schema of the website was Purple. So while using these renowned styling lib, I was finding it a bit of tedious work to change the color & styling of their components accroding to the website theme."
        }
        <br />
        <br />
        {
          "It was only later I found GrapeUI , a styling lib for React which actually provides you styles in Grape/Purple colors out of the box. Although there were all types of components in it, but still, it had the basic components which were frequently used in a Website."
        }
        <br />
        <br />
        {
          "Thus there might be other lib out there which could provide you with certain color, styling and features out of the box that might reduce you time of development and you can use them to reach you development goals."
        }
        <br />
      </p>
      <h3 className={"display-3 fw-bold"}> {"Aim"} </h3>
      <p className={"fs-5"}>
        {
          "Thus, my aim is to develop a doc which can allow comparison of various components and styles across all the styling libraries out there so you can visit just one place to view the styles you want and get started with it."
        }
      </p>
    </div>
  );
}
