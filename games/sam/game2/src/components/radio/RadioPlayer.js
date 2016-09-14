import React, {PropTypes} from 'react';

const RadioPlayer = props => {
  return (
    <audio
      className="audio-player"
      autoPlay="true"
      src={props.stream}
      onPlay={props.onPlay}
      muted={props.paused}/>
  );
};

RadioPlayer.propTypes = {
  stream: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired ,
  onPlay: PropTypes.func.isRequired
};

export default RadioPlayer;
