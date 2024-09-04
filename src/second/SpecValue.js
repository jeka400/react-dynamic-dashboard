import PropTypes from "prop-types";

const validLevels = Array.from({ length: 10 }, (_, i) => i + 1);

const userPropType = {
  name: PropTypes.string,
  age: PropTypes.number,
};

function SpecValue({ levelProp, userProp }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <p className="text-primary">Level: { levelProp }</p>
        <p>Name: { userProp.name }</p>
        <p>Age: { userProp.age }</p>
      </div>
    </div>
  );
}

SpecValue.propTypes = {
  levelProp: PropTypes.oneOf(validLevels),
  userProp: PropTypes.shape(userPropType),
};

export default SpecValue;
