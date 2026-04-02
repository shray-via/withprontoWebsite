import { useState } from 'react';
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from 'lucide-react';

const PRONTO_URL = 'https://www.withpronto.com/';
const extensionCards = [
  {
    icon: Clock3,
    title: 'Always-on Availability',
    text: 'Book urgent home services any day, with reliable response windows and clear ETA tracking.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Professionals',
    text: 'Every visit is handled by trained experts following quality and safety checklists.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Pricing',
    text: 'Upfront estimates with no surprise fees, so you know exactly what to expect.',
  },
];

export default function App() {
  const [frameFailed, setFrameFailed] = useState(false);

  if (frameFailed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5 text-base text-gray-900">
        <a
          href={PRONTO_URL}
          target="_blank"
          rel="noreferrer"
          className="min-h-[44px] min-w-[44px] rounded-lg bg-black px-6 py-3 text-white"
        >
          Open Pronto
        </a>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f8fafc] text-[#1c1c1c]">
      <iframe
        title="Pronto Website Replica"
        src={PRONTO_URL}
        className="h-[100svh] w-full border-0"
        allow="clipboard-read; clipboard-write; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setFrameFailed(true)}
      />

      <section className="bg-gradient-to-b from-[#f8fafc] via-[#f4f7f9] to-white px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-5xl space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full bg-[#e8f7ef] px-4 py-2 text-sm font-semibold text-[#05ac5f]">
              <Sparkles className="h-4 w-4" />
              Continue Exploring
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1c1c1c] md:text-4xl">
              More Pronto, Same Experience
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#666]">
              Extended below in the same visual direction so the page no longer stops abruptly at the hero image.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {extensionCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex min-h-[44px] min-w-[44px] w-11 items-center justify-center rounded-xl bg-[#eef8f2] text-[#05ac5f]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#1c1c1c]">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#666]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20">
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-[#0f1112] p-6 text-white shadow-sm md:p-10">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Need help right now?</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            Download Pronto and book vetted home-service experts in minutes.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.company.pronto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#05ac5f] px-6 py-3 text-base font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Get Android App
            </a>
            <a
              href="https://apps.apple.com/in/app/pronto-10-min-home-services/id6743402816"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#111] transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Get iOS App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
