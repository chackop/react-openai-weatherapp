import PropTypes from "prop-types";
import "./Description.css";
import Loader from "./Loader";

const Description = ({ isLoading, weatherDescription }) => {
  return (
    <div className="description">
      <h2 className="description__title">Description</h2>
      <div className="description__divider">
        {isLoading && <Loader />}
        <p className="description__text">{weatherDescription}</p>
      </div>
    </div>
  );
};
Description.defaultProps = {
  weatherDescription: "Waiting for location data.",
  isLoading: true,
};

Description.propTypes = {
  weatherDescription: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Description;
