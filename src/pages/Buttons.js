import RightSideNav from "../components/RightSideNav";
import ButtonColors from "../modules/Buttons/Button.colors";
import ButtonDisabled from "../modules/Buttons/Button.Disabled";
import ButtonSizeVariants from "../modules/Buttons/Button.sizeVariants";
import WithIcons from "../modules/Buttons/WithIcons";

export default function ButtonStyles() {
  return (
    <div className={"w-100 d-flex"}>
      <div className={"w-75"}>
        <h1 className={"display-4 ps-4"}>{"Buttons"}</h1>
        <ButtonColors />
        <ButtonSizeVariants />
        <ButtonDisabled />
        <WithIcons />
      </div>
      <RightSideNav
        values={["Colors", "Size & Variants", "Disabled", "Icons"]}
      />
    </div>
  );
}
