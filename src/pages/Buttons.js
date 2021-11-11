import ButtonColors from "../modules/Buttons/Button.colors";
import ButtonDisabled from "../modules/Buttons/Button.Disabled";
import ButtonSizeVariants from "../modules/Buttons/Button.sizeVariants";
import WithIcons from "../modules/Buttons/WithIcons";

export default function ButtonStyles() {
  return (
    <div className={"w-100"} style={{ overflowX: "hidden" }}>
      <h1 className={"display-4 ps-4"}>{"Buttons"}</h1>
      <ButtonColors />
      <ButtonSizeVariants />
      <ButtonDisabled />
      <WithIcons />
    </div>
  );
}
