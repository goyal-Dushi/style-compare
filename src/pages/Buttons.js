import { useMemo } from "react";
import RightSideNav from "../components/RightSideNav";
import ButtonColors from "../modules/Buttons/Colors";
import ButtonDisabled from "../modules/Buttons/Disabled";
import ButtonSizeVariants from "../modules/Buttons/SizeVariants";
import WithIcons from "../modules/Buttons/WithIcons";
const { componentIds, navLinks } = require("../modules/Buttons/buttons.json");

export default function ButtonStyles() {
  const scrollIds = useMemo(() => {
    let ids = [];
    for (const id in componentIds) {
      ids.push("#" + componentIds[id]);
    }
    return ids;
  }, []);

  return (
    <div className={"w-100 d-flex"}>
      <div
        className={"w-75 position-relative"}
        data-bs-spy={"scroll"}
        data-bs-target={"#rightNav"}>
        <h1 className={"display-4 ps-4 fw-bold"}>{"Buttons"}</h1>
        <ButtonColors id={componentIds.buttonColorId} />
        <ButtonSizeVariants id={componentIds.buttonSizeVarId} />
        <ButtonDisabled id={componentIds.buttonDisabledId} />
        <WithIcons id={componentIds.buttonIconId} />
      </div>
      <RightSideNav values={navLinks} scrollRef={scrollIds} />
    </div>
  );
}
