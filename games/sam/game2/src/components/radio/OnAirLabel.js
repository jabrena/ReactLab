import React, {PropTypes} from 'react';

const OnAirLabel = props => {
  return (
    <div className="onAir">On air: {props.onAir}</div>
  );
};

OnAirLabel.propTypes = {
  onAir: PropTypes.string.isRequired
};

export default OnAirLabel;
