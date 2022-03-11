import React, { useMemo } from "react";
import RightSideNav from "../components/RightSideNav";
import AlignmentContent from "../modules/Chips&Badges/Badges/Align&Content";
import ColorsSizes from "../modules/Chips&Badges/Chips/ColorSize";
import IconChips from "../modules/Chips&Badges/Chips/IconChips";
const {
  componentIds: chipIds,
  navLinks: chipNavLabel,
} = require("../modules/Chips&Badges/Chips/chips.json");
const {
  componentIds: badgeIds,
  navLinks: badgeLabel,
} = require("../modules/Chips&Badges/Badges/badges.json");

export default function Chip_Badge() {
  const scrollIds = useMemo(() => {
    const ids = [];
    for (const id in chipIds) {
      ids.push("#" + chipIds[id]);
    }
    for (const id in badgeIds) {
      ids.push("#" + badgeIds[id]);
    }
    return ids;
  }, []);

  const rightScrollLabels = useMemo(() => {
    return [...chipNavLabel, ...badgeLabel];
  }, []);

  return (
    <div className={"w-100 d-flex"}>
      <div className={"w-75"}>
        <h1 className={"display-4 fw-bold ps-4"}>{"Chips & Badges"}</h1>
        <h2 className={"display-5 fw-bold mt-3 ps-4"}>
          <u>{"Chips"}</u>
        </h2>
        <ColorsSizes id={chipIds.chipColorSizeId} />
        <IconChips id={chipIds.chipIconsId} />
        <h2 className={"display-5 fw-bold mt-3 ps-4"}>
          <u>{"Badges"}</u>
        </h2>
        <AlignmentContent id={badgeIds.badgeAlignId} />
      </div>
      <RightSideNav values={rightScrollLabels} scrollRef={scrollIds} />
    </div>
  );
}
