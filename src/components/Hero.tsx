import clsx from "clsx";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const clash = localFont({ src: "../app/ClashDisplay-Variable.ttf" });

const Hero: React.FC = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-4">
      <Link
        href="https://twitter.com/haardikkk/status/1645794223281815552"
        target="_blank"
      >
        <div className="px-3 py-1 rounded-3xl transition-all hover:scale-105 bg-sky-200 border-2 border-sky-300 font-medium flex items-center gap-2">
          <Image alt="Twitter Logo" src="/twitter.svg" width={20} height={20} />
          Introducing Presto
        </div>
      </Link>

      <h1
        className={clsx(
          clash.className,
          "text-7xl font-semibold text-center max-w-2xl mt-8"
        )}
      >
        Transform your ideas{" "}
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-violet-500 to-blue-500">
          with AI
        </span>
      </h1>

      <p className="text-lg max-w-2xl text-center">
        Quickly iterating on ideas? Let our AI show you how it would look in
        different realism settings. 100% free - try now!
      </p>

      <div className="flex items-center gap-3">
        <Link
          href="https://twitter.com/haardikkk/status/1645794223281815552"
          target="_blank"
        >
          <button
            type="button"
            className="py-3 px-5 border-2 rounded-lg font-medium bg-transparent transition-colors hover:bg-slate-200 border-slate-200"
          >
            Read More
          </button>
        </Link>

        <Link href="/visualize">
          <button
            type="button"
            className="py-3 px-5 border-2 rounded-lg font-medium bg-slate-900 text-slate-100 transition-colors hover:bg-slate-700 border-slate-700"
          >
            Transform Idea
          </button>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Image
            alt="Original Dog"
            src="/original-dog.png"
            className="rounded-md border border-slate-300"
            width={256}
            height={256}
          />
          <span className="font-medium text-sm text-center">
            Original Photo + &quot;dog on beach&quot;
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Image
            alt="Generated Dog"
            src="/generated-dog.png"
            className="rounded-md border border-slate-300"
            width={256}
            height={256}
          />
          <span className="font-medium text-sm text-center">
            Generated Photo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
