import React, { lazy, Suspense } from "react";

const MaterialAlertColors = lazy(() =>
  import("./Colors/Libs/MaterialAlertColors")
);
const MaterialAlertContent = lazy(() =>
  import("./Content/Libs/MaterialAlertContent")
);
const MaterialAlertDismiss = lazy(() =>
  import("./Dismissable/Libs/MaterialAlertDismiss")
);
const MaterialAlertVariants = lazy(() =>
  import("./Variants/Libs/MaterialAlertVariants")
);

const BootstrapAlertColor = lazy(() =>
  import("./Colors/Libs/BootstrapAlertColor")
);
const BootstrapAlertContent = lazy(() =>
  import("./Content/Libs/BootstrapAlertContent")
);
const BootstrapAlertDismiss = lazy(() =>
  import("./Dismissable/Libs/BootstrapAlertDismiss")
);
const BootstrapAlertVariants = lazy(() =>
  import("./Variants/Libs/BootstrapAlertVariants")
);

const {
  componentIDs: {
    alertColorID,
    alertDismissID,
    alertVariantID,
    alertContentID,
  },
} = require("./alerts.json");

export default function GetAlertComponent({ cssLib, componentType }) {
  if (cssLib === "M") {
    switch (componentType) {
      case alertColorID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialAlertColors />
          </Suspense>
        );
      case alertContentID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialAlertContent />
          </Suspense>
        );
      case alertDismissID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialAlertDismiss />
          </Suspense>
        );
      case alertVariantID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialAlertVariants />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
  if (cssLib === "B") {
    switch (componentType) {
      case alertColorID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapAlertColor />
          </Suspense>
        );
      case alertContentID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapAlertContent />
          </Suspense>
        );
      case alertDismissID:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapAlertDismiss />
          </Suspense>
        );
      case alertVariantID:
        return (
          <Suspense fallback={<></>}>
            <BootstrapAlertVariants />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
  return <></>;
}
