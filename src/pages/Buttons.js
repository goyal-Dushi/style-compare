import ButtonColors from "../modules/Buttons/Button.colors";
import ButtonDisabled from "../modules/Buttons/Button.Disabled";
import ButtonSizeVariants from "../modules/Buttons/Button.sizeVariants";
import WithIcons from "../modules/Buttons/WithIcons";

export default function ButtonStyles() {
  return (
    <>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <ButtonColors />
        <ButtonSizeVariants />
        <ButtonDisabled />
        <WithIcons />
      </div>
    </>
  );
}
