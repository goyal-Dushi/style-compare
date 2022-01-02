import React from "react";
import TypesColors from "../modules/Progress/TypesColors";
import RightSideNav from "../components/RightSideNav";
import AnimationLabels from "../modules/Progress/AnimationLabels";

export default function Progress() {
  return (
    <>
      <div className={"w-100 d-flex"}>
        <div
          className={"w-75 position-relative"}
          data-bs-spy={"scroll"}
          data-bs-target={"#rightNav"}>
          <h1 className={"display-4 ps-4"}>{"Progress"}</h1>
          <TypesColors id={"typesColor"} />
          <AnimationLabels id={"animationLables"} />
        </div>
        <RightSideNav
          values={["Types & Colors", "Animation & Labels"]}
          scrollRef={["#typesColor", "#animationLabels"]}
        />
      </div>
    </>
  );
}
