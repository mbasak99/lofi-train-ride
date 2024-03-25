import Image from "next/image";
import lofiTrain from "./gif/lofi_train_girl.gif";

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
          <span className="flex flex-col gap-4">
            <label htmlFor="music">Music: </label>
            <input name="music" type="range" />
          </span>
          <span className="flex flex-col gap-4">
            <label htmlFor="train-noise">Train Ambience: </label>
            <input name="train-noise" type="range" />
          </span>
          <span className="flex flex-col gap-4">
            <label htmlFor="people-talking">Nearby Conversations: </label>
            <input name="people-talking" type="range" />
          </span>
        </div>
      </main>
      <footer className="m-10">Made by Monark</footer>
    </div>
  );
}
