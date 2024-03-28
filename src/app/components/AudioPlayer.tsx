"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Howl } from "howler";

const AudioPlayer: FunctionComponent<{
  volume: number;
  isMusic: boolean;
  src: string;
}> = ({ volume, isMusic, src }) => {
  /* 
    Current Issues:
    - YouTube song isn't playing
    - Volume isn't dynamic right now
    - If you change volume from 0 to 100 mutliple times it'll play the sound multiple times
   */

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [played, setPlayed] = useState<boolean>(false);
  let audio = new Howl({
    src,
    onfade: () => {
      isMusic ? tapeEject.play() : null;
    },
    loop: true,
    html5: true,
    // volume: volume / 100,
  });
  let tapeInsert: Howl;
  let tapeEject: Howl;

  if (isMusic) {
    tapeInsert = new Howl({
      src: "static/audio/effects/tape-insert.mp3",
      onend: () => {
        audio.play();
      },
    });
    tapeEject = new Howl({ src: "static/audio/effects/tape-eject.mp3" });
  }
  useEffect(() => {
    if (volume > 0 && !isPlaying) {
      isMusic ? tapeInsert.play() : audio.play();
      setIsPlaying(true);
      isMusic ? setPlayed(true) : null;
    } else if (volume === 0 && played) {
      audio.fade(1, 0, 2);
      audio.stop();
      setIsPlaying(false);
    }
  }, [volume]);

  return (
    <div className="hidden">
      {/* <audio
        // controls
        src="static/audio/songs/crowd-talking-1.mp3"
        // src="static/audio/effects/tape-insert.mp3"
        // autoPlay
        // loop
        ref={audioRef}
        onPlay={(event) => {
          if (isMusic) tapeInsert.play();
        }}
      /> */}
    </div>
  );
};

export default AudioPlayer;
