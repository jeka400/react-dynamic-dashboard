import PropTypes from "prop-types";

const Page = ({ myHeader, myContent }) => {
  return (
    <div className="card">
      <div className="card-header">
        { myHeader }
      </div>
      <div className="card-body">
        { myContent }
      </div>
    </div>
  );
};

Page.propTypes = {
  myHeader: PropTypes.element.isRequired,
  myContent: PropTypes.node.isRequired,
};

export default Page;
