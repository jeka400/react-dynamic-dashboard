import SpecType from "./SpecType";
import { userList } from "./UserList";
import SpecValue from "./SpecValue";

export default function SecondComponent() {
  return (
    <div className="mt-4">
      <SpecType dateProp={ new Date()} countProp={3} userListProp={ userList } />
      <hr />

      <SpecValue levelProp={10} userProp={{ name: "John", age: 25 }} /><br />
      <SpecValue userProp={{ name: "Marcus", age: 30, online: false }} /><br />
      <SpecValue levelProp={12} userProp={{ name: "Eve", age: 50 }} /><br />
    </div>
  );
}
