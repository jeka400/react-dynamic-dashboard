import { lazy } from "react";

const FirstComponent = lazy(() => import("./first/FirstComponent"));
const SecondComponent = lazy(() => import("./second/SecondComponent"));

export default function DynamicComponent({ name }) {
    switch(name) {
        case "first":
            return <FirstComponent />;
        case "second":
            return <SecondComponent />;
        default:
            return null;
    }
}

