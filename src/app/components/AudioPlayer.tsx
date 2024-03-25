import React, { FunctionComponent } from "react";

const AudioPlayer: FunctionComponent = () => {
  return (
    <div>
      <audio
        controls
        src="../../../static/audio/effects/tape-insert.mp3"
        autoPlay
      />
    </div>
  );
};

export default AudioPlayer;
