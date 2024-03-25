"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

const AudioPlayer: FunctionComponent<{ volume: number }> = ({ volume }) => {
  let audioRef = useRef<HTMLAudioElement>();
  useEffect(() => {
    if (volume > 0 && !!audioRef.current) {
      audioRef.current?.play();
      audioRef.current.volume = volume / 100;
    } else audioRef.current?.pause();
  }, [volume]);
  return (
    <div className="hidden">
      <audio
        // controls
        src="static/audio/songs/crowd-talking-1.mp3"
        // autoPlay
        loop
        ref={audioRef}
      />
    </div>
  );
};

export default AudioPlayer;
