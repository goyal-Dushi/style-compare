import React from "react";
import RightSideNav from "../components/RightSideNav";
import AlignmentContent from "../modules/Chips&Badges/Badges/Alignment&Content";
import ColorsSizes from "../modules/Chips&Badges/Chips/ColorsSizes";
import IconChips from "../modules/Chips&Badges/Chips/IconChips";

export default function Chip_Badge() {
  return (
    <div className={"w-100 d-flex"}>
      <div className={"w-75"}>
        <h1 className={"display-4 fw-bold ps-4"}>{"Chips & Badges"}</h1>
        <h2 className={"display-5 fw-bold mt-3 ps-4"}>
          <u>{"Chips"}</u>
        </h2>
        <ColorsSizes id={"chipColorSizes"} />
        <IconChips id={"chipIcons"} />
        <h2 className={"display-5 fw-bold mt-3 ps-4"}>
          <u>{"Badges"}</u>
        </h2>
        <AlignmentContent id={"badgeAlignment"} />
      </div>
      <RightSideNav
        values={[
          "Colors & Sizes",
          "Icon Chips",
          "Alignment and content in Badges",
        ]}
        scrollRef={["#chipColorSizes", "#chipIcons", "#badgeAlignment"]}
      />
    </div>
  );
}
