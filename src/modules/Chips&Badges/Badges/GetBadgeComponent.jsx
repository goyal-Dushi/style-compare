import React, { lazy, Suspense } from "react";

const MaterialBadge = lazy(() => import("./Align&Content/Libs/MaterialBadge"));

const BootstrapBadge = lazy(() =>
  import("./Align&Content/Libs/BootstrapBadge")
);

const {
  componentIds: { badgeAlignId },
} = require("./badges.json");

function GetBadgeComponent({ cssLib, componentType }) {
  if (cssLib === "M") {
    switch (componentType) {
      case badgeAlignId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <MaterialBadge />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
  if (cssLib === "B") {
    switch (componentType) {
      case badgeAlignId:
        return (
          <Suspense fallback={<> {"Loading..."} </>}>
            <BootstrapBadge />
          </Suspense>
        );
      default:
        return <></>;
    }
  }
}

export default GetBadgeComponent;
