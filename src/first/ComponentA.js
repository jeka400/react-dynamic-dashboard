import PropTypes from "prop-types";

const ComponentA = ({
  stringProp,
  numberProp,
  boolProp,
  funcProp,
  arrayProp,
  objectProp,
}) => {
  return (
    <section className="component-a">
      <p>{ stringProp }</p>
      <p>{ numberProp }</p>
      <p>
        <input type="checkbox" defaultChecked={ boolProp } />
      </p>
      <p>{ funcProp() }</p>
      <ul>
        { arrayProp.map((item, index) => (
          <li key={ index }>{ item }</li>
        ))}
      </ul>
      <p>{ objectProp.key }</p>
    </section>
  );
};

ComponentA.propTypes = {
  stringProp: PropTypes.string.isRequired,
  numberProp: PropTypes.number.isRequired,
  boolProp: PropTypes.bool.isRequired,
  funcProp: PropTypes.func.isRequired,
  arrayProp: PropTypes.array.isRequired,
  objectProp: PropTypes.object.isRequired,
};

export default ComponentA;
