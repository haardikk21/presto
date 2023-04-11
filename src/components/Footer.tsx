import Link from "next/link";

const Footer: React.FC = () => {
  // add a footer that says "Powered by Vercel, Upstash, and Replicate"
  // and links to their websites
  // Also say it's made by @haardikkk (Twitter) and link to the Github repo

  return (
    <footer className="flex p-4 border-t-2 text-center justify-center items-center mt-5 pb-7 sm:px-4 px-2">
      Powered by&nbsp;
      <Link
        href="https://vercel.com"
        target="_blank"
        className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
      >
        Vercel
      </Link>
      ,&nbsp;
      <Link
        href="https://upload.io"
        target="_blank"
        className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
      >
        Upload
      </Link>
      ,&nbsp;and&nbsp;
      <Link
        href="https://replicate.com"
        target="_blank"
        className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
      >
        Replicate
      </Link>
    </footer>
  );
};

export default Footer;
