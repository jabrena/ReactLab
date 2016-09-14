import React, {PropTypes} from 'react';

const ControlButton = props => {
  return (
    <div>

      <div onClick={props.onStartClick} className={props.paused ? 'show' : 'hide'}>
        Play >
      </div>

      <div onClick={props.onPauseClick} className={props.paused ? 'hide' : 'show'}>
        Pause ||
      </div>

    </div>
  );
};

ControlButton.propTypes = {
  onStartClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired
};

export default ControlButton;
