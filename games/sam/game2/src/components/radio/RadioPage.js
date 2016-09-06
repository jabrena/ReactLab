import React from 'react';

import RadioPlayer from './RadioPlayer';
import ControlButton from './ControlButton';
import OnAirLabel from './OnAirLabel';

class RadioPage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    // TODO: The onAir and streamUrl should be retrieved from an api
    this.state = {
      paused:true,
      onAir:"We'll share live set",
      streamUrl:"http://centova.radio.com.pt:9034/stream"
    };
  }

  onPlay() {
    console.log('play');
  }

  onStartClick() {
    this.setState({paused:false});
  }

  onPauseClick() {
    this.setState({paused:true});
  }

  render() {
    return (
      <div>

        <h1>Guarda, Rewind it</h1>

        <div className="radio-player">

          <RadioPlayer
            stream={this.state.streamUrl}
            onPlay={this.onPlay}
            paused={this.state.paused}/>

          <OnAirLabel
            onAir={this.state.onAir}/>

          <ControlButton
             onStartClick={this.onStartClick}
             onPauseClick={this.onPauseClick}
             paused={this.state.paused} />

        </div>

      </div>
    );
  }
}

export default RadioPage;
