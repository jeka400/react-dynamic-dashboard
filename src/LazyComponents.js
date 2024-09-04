import React, { Suspense, lazy } from 'react';
import { FadeLoader } from 'react-spinners';
import { Link, Outlet } from "react-router-dom";

export const LazyFirstComponent = lazy(() =>
  Promise.all([
    import("./first/FirstComponent.js"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([module]) => module)
);

export const LazySecondComponent = lazy(() =>
  Promise.all([
    import("./second/SecondComponent.js"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([module]) => module)
);

export function MainLayout() {
  return (
    <section className="mt-4">
      <nav className="nav nav-pills">
        <Link className="nav-link" to="first">First Component</Link>
        <Link className="nav-link" to="second">Second Component</Link>
      </nav>
      
      <div className="mt-4">
        <Suspense fallback={  <FadeLoader color={"lightblue"} size={150} />} >
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}
