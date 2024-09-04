import React, { lazy } from "react";

const FeatureComponent = lazy(() => 
  Promise.all([
    import("./FeatureComponent"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([module]) => module)
);

export default function MainPage() {
  return (
    <div className="mt-4">
      <h2>Lazy Loading Example</h2>
      <FeatureComponent />
    </div>
  );
}
