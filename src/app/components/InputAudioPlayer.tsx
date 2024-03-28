"use client";
import React, { FunctionComponent, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import InputRange from "./InputRange";

const InputAudioPlayer: FunctionComponent<{
  label: string;
  name: string;
}> = ({ label, name }) => {
  const [volume, setVolume] = useState<number>(0);
  const audioMap: { [key: string]: string } = {
    music: "https://www.youtube.com/watch?v=DbuebKNKQsQ",
    "train-noise": "static/audio/songs/train-on-tracks.mp3",
    "people-talking": "static/audio/songs/crowd-talking-1.mp3",
  };

  return (
    <>
      <AudioPlayer volume={volume} isMusic={name === "music"} />
      <InputRange
        label={label}
        name={name}
        volume={volume}
        setVolume={setVolume}
      />
    </>
  );
};

export default InputAudioPlayer;
