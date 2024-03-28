"use client";
import React, { FunctionComponent, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import InputRange from "./InputRange";

const InputAudioPlayer: FunctionComponent<{
  label: string;
  name: string;
  url: string;
}> = ({ label, name, url }) => {
  const [volume, setVolume] = useState<number>(0);

  return (
    <>
      <AudioPlayer volume={volume} isMusic={name === "music"} src={url} />
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
