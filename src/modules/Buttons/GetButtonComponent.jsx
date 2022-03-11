import React, { lazy, Suspense } from "react";

const MaterialButtonColors = lazy(() =>
  import("./Colors/Libs/MaterialButtonColors")
);
const MaterialSizVarButton = lazy(() =>
  import("./SizeVariants/Libs/MaterialSizVarButton")
);
const MaterialBtnIcon = lazy(() => import("./WithIcons/Libs/MaterialBtnIcon"));
const MaterialDisabledBtn = lazy(() =>
  import("./Disabled/Libs/MaterialDisabledBtn")
);

const BootstrapButtonColors = lazy(() =>
  import("./Colors/Libs/BootstrapButtonColors")
);
const BootstrapSizVarButton = lazy(() =>
  import("./SizeVariants/Libs/BootstrapSizVarButton")
);
const BootstrapBtnIcon = lazy(() =>
  import("./WithIcons/Libs/BootstrapBtnIcon")
);
const BootstrapDisabledBtn = lazy(() =>
  import("./Disabled/Libs/BootstrapDisabledBtn")
);

const {
  componentIds: {
    buttonColorId,
    buttonDisabledId,
    buttonIconId,
    buttonSizeVarId,
  },
} = require("./buttons.json");

export default function GetButtonComponent({ cssLib, componentType }) {
  if (cssLib === "M") {
    switch (componentType) {
      case buttonColorId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialButtonColors />
          </Suspense>
        );
      case buttonDisabledId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialDisabledBtn />
          </Suspense>
        );
      case buttonIconId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialBtnIcon />
          </Suspense>
        );
      case buttonSizeVarId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialSizVarButton />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
  if (cssLib === "B") {
    switch (componentType) {
      case buttonColorId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapButtonColors />
          </Suspense>
        );
      case buttonDisabledId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapDisabledBtn />
          </Suspense>
        );
      case buttonIconId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapBtnIcon />
          </Suspense>
        );
      case buttonSizeVarId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapSizVarButton />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
}
