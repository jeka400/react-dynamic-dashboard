import PropTypes from "prop-types";
import User from "./UserList";

function SpecType({ dateProp, countProp, userListProp }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <p>{ dateProp ? dateProp.toLocaleString() : "No date provided" }</p>

        <p>{ countProp }</p>
        
        <ul className="list-group">
          {userListProp.map((user) => (
            <li key={ user.id } className="list-group-item">{ user.name }</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SpecType.propTypes = {
  dateProp: PropTypes.instanceOf(Date),
  countProp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userListProp: PropTypes.arrayOf(PropTypes.instanceOf(User)),
};

export default SpecType;
