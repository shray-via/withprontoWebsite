import { useState } from 'react';

const PRONTO_URL = 'https://www.withpronto.com/';

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
    <main className="h-screen w-full bg-white">
      <iframe
        title="Pronto Website Replica"
        src={PRONTO_URL}
        className="h-full w-full border-0"
        allow="clipboard-read; clipboard-write; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setFrameFailed(true)}
      />
    </main>
  );
}
