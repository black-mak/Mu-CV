import Link from "next/link";

export const metadata = {
  title: "404 â€” Muhamed Alaa | BLACK-MAKÂ®",
};

// 404 in the CV's voice â€” quiet, typographic, one door back home.
export default function NotFound() {
  return (
    <section className="container flex min-h-[100svh] flex-col items-center justify-center gap-8 text-center">
      <span className="eyebrow text-faint">404 / PAGE NOT FOUND</span>

      <h1 className="display text-[clamp(2.4rem,7vw,5.5rem)]">
        This page<br />
        <em>isn&apos;t on the rÃ©sumÃ©.</em>
      </h1>

      <p className="lede max-w-[42ch]">
        The address you followed doesn&apos;t exist â€” but the person behind
        the practice does.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn btn-light">
          <span>Back to the CV</span>
          <span>â†—</span>
        </Link>
        <a
          href="https://black-mak.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <span>Visit the studio</span>
          <span>â†—</span>
        </a>
      </div>
    </section>
  );
}
