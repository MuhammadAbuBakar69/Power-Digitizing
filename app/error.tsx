"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="mx-auto max-w-xl px-5 py-40 text-center">
      <h1 className="font-display text-3xl font-semibold">This page failed to load</h1>
      <p className="mt-3 text-muted-foreground">Something went wrong on our side. Try again, and contact us if it keeps happening.</p>
      <button onClick={reset} className="mt-8 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Try again</button>
    </section>
  );
}
