"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

const AudioPlayer: FunctionComponent<{ volume: number; isMusic: boolean }> = ({
  volume,
  isMusic,
}) => {
  let audioRef = useRef<HTMLAudioElement>();
  let tapeInsert = new Audio("static/audio/effects/tape-insert.mp3");

  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    if (volume > 0 && !!audioRef.current) {
      console.log(tapeInsert.ended);
      audioRef.current.play();
      audioRef.current.volume = volume / 100;
      // setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      // setIsPlaying(false);
    }
  }, [volume]);

  useEffect(() => {
    console.log("ended");
  }, [tapeInsert.ended]);

  return (
    <div className="hidden">
      <audio
        // controls
        src="static/audio/songs/crowd-talking-1.mp3"
        // src="static/audio/effects/tape-insert.mp3"
        // autoPlay
        loop
        ref={audioRef}
        onPlay={(event) => {
          if (isMusic) tapeInsert.play();
        }}
        onBeforeInput={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
};

export default AudioPlayer;
