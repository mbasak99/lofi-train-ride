import Image from "next/image";
import lofiTrain from "./gif/lofi_train_girl.gif";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-8 p-24">
        <div>
          <h1>Lofi Train Ride</h1>
        </div>
        <Image
          src={lofiTrain}
          width={400}
          height={300}
          className="rounded-lg"
          alt="Lofi Train Ride GIF"
          unoptimized={true}
        />
      </main>
      <footer className="m-10">Made by Monark</footer>
    </>
  );
}
