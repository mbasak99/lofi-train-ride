import Image from "next/image";
import lofiTrain from "../../static/gif/lofi_train_girl.gif";
import InputAudioPlayer from "./components/InputAudioPlayer";

export default function Home() {
  const audioMap: {
    [key: string]: {
      url: string;
      label: string;
    };
  } = {
    music: {
      url: "https://www.youtube.com/watch?v=DbuebKNKQsQ", // https://www.youtube.com/watch?v=DbuebKNKQsQ
      label: "Music",
    },
    // "train-noise": {
    //   url: "static/audio/songs/train-on-tracks.mp3",
    //   label: "Train Ambience",
    // },
    // "people-talking": {
    //   url: "static/audio/songs/crowd-talking-1.mp3",
    //   label: "Nearby Conversations",
    // },
  };

  return (
    <div className="flex flex-col items-center">
      <main className="flex min-h-screen flex-col items-center gap-8 p-10">
        <div>
          <h1 className="text-4xl font-bold">Lofi Train Ride</h1>
        </div>
        <Image
          src={lofiTrain}
          width={400}
          height={300}
          className="rounded-lg"
          alt="Lofi Train Ride Animation"
          unoptimized={true}
          priority
        />
        <div className="flex w-full p-10 flex-col gap-10 input-container">
          {Object.entries(audioMap).map(([key, value]) => (
            <>
              <InputAudioPlayer
                label={value.label}
                name={key}
                url={value.url}
              />
            </>
          ))}
        </div>
      </main>
      <footer className="m-10">Made by Monark</footer>
    </div>
  );
}
