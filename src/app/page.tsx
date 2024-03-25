import Image from "next/image";
import lofiTrain from "../../static/gif/lofi_train_girl.gif";
import InputAudioPlayer from "./components/InputAudioPlayer";

export default function Home() {
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
        />
        <div className="flex w-full p-10 flex-col gap-10 input-container">
          <InputAudioPlayer label="Music" name="music" />
          <InputAudioPlayer label="Train Ambience" name="train-noise" />
          <InputAudioPlayer
            label="Nearby Conversations"
            name="people-talking"
          />
        </div>
      </main>
      <footer className="m-10">Made by Monark</footer>
    </div>
  );
}
