import React from "react";
import ComponentA from "./ComponentA";
import Page from "./Page";

const invalidProps = {
  myString: 100,
  myNumber: "My String",
  myBool: () => "My return value",
  myFunc: true,
  myArray: { myProp: "My prop" },
  myObject: ["one", "two", "three"],
};

const myContent = <p>My Content</p>;

const InvalidProps = () => {
  return (
    <>
      <ComponentA { ...invalidProps } />
      <hr />

      <Page myHeader="Invalid props" { ...{ myContent } } />

    </>
  );
};

export default InvalidProps;
