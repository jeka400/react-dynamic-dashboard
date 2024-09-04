import ValidProps from "./ValidProps";
import InvalidProps from "./InvalidProps";

export default function FirstComponent() {
  return (
    <div className="mt-4">
      <ValidProps />
      {/* <InvalidProps /> */}
    </div>
  );
}
