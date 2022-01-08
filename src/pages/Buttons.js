import RightSideNav from "../components/RightSideNav";
import ButtonColors from "../modules/Buttons/Button.colors";
import ButtonDisabled from "../modules/Buttons/Button.Disabled";
import ButtonSizeVariants from "../modules/Buttons/Button.sizeVariants";
import WithIcons from "../modules/Buttons/WithIcons";

export default function ButtonStyles() {
  return (
    <div className={"w-100 d-flex"}>
      <div
        className={"w-75 position-relative"}
        data-bs-spy={"scroll"}
        data-bs-target={"#rightNav"}>
        <h1 className={"display-4 ps-4 fw-bold"}>{"Buttons"}</h1>
        <ButtonColors id={"btnColors"} />
        <ButtonSizeVariants id={"btnSizeVariants"} />
        <ButtonDisabled id={"btnDisabled"} />
        <WithIcons id={"btnWithIcons"} />
      </div>
      <RightSideNav
        values={["Colors", "Size & Variants", "Disabled", "Icons"]}
        scrollRef={[
          "#btnColors",
          "#btnSizeVariants",
          "#btnDisabled",
          "#btnWithIcons",
        ]}
      />
    </div>
  );
}
