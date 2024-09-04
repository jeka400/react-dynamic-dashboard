import React from "react";
import ComponentA from "./ComponentA";
import Page from "./Page";

const validProps = {
  stringProp: "Valid String",
  numberProp: 100,
  boolProp: true,
  funcProp: () => "Function executed", 
  arrayProp: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  objectProp: { key: "Valid Prop" }, 
};

const headerElement = <h5 className="display-8">Valid Props Example</h5>;
const contentElement = <ComponentA { ...validProps } />;

const ValidProps = () => {
  return (
    <Page myHeader={ headerElement } myContent={ contentElement } />
  );
};

export default ValidProps;
