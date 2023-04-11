import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import clsx from "clsx";

const clash = localFont({ src: "../app/ClashDisplay-Variable.ttf" });

interface IHeaderProps {
  photo?: string;
}

const Header: React.FC<IHeaderProps> = ({ photo }) => {
  return (
    <header className="flex max-w-7xl mx-auto justify-between items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          alt="Logo"
          src="/logo.svg"
          className="w-7 h-7"
          width={25}
          height={25}
        />
        <h1
          className={clsx(
            "text-3xl font-semibold ml-2 tracking-tight",
            clash.className
          )}
        >
          Presto
        </h1>
      </Link>

      {photo && (
        <Image
          alt="Profile Picture"
          src={photo}
          className="w-10 rounded-full"
          width={32}
          height={28}
        />
      )}

      <Link
        href="https://github.com/haardikk21/presto"
        target="_blank"
        className="flex items-center gap-2 rounded-3xl bg-slate-200 px-3 py-1 hover:bg-slate-300"
      >
        <Image
          alt="Github Logo"
          src="/github-mark.svg"
          className="w-7 h-7"
          width={25}
          height={25}
        />
        <span className="font-medium">Star on GitHub</span>
      </Link>
    </header>
  );
};

export default Header;
