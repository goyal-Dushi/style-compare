import React, { lazy, Suspense } from "react";

const MaterialChipColorSize = lazy(() =>
  import("./ColorSize/Libs/MaterialChipColorSize")
);
const MaterialChipIcon = lazy(() =>
  import("./IconChips/Libs/MatericalChipIcon")
);

const BootstrapChipColorSize = lazy(() =>
  import("./ColorSize/Libs/BootstrapChipColorSize")
);
const BootstrapChipIcon = lazy(() =>
  import("./IconChips/Libs/BootstrapChipIcons")
);

const {
  componentIds: { chipColorSizeId, chipIconsId },
} = require("./chips.json");

function GetChipComponent({ cssLib, componentType }) {
  if (cssLib === "M") {
    switch (componentType) {
      case chipColorSizeId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialChipColorSize />
          </Suspense>
        );
      case chipIconsId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialChipIcon />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
  if (cssLib === "B") {
    switch (componentType) {
      case chipColorSizeId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapChipColorSize />
          </Suspense>
        );
      case chipIconsId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapChipIcon />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
}

export default GetChipComponent;
