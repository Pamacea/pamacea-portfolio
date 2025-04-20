import { Display } from "./Display";
import { OtherLink } from "./OtherLink";

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen px-4 py-20">
      <div className="flex w-full flex-col justify-between px-4 py-20 sm:items-center lg:flex-row lg:px-8 xl:px-24">
        <Display />
        <OtherLink />
      </div>
    </section>
  );
}
