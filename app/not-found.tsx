import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-40 text-center">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">That address does not exist. Check the link or head back to the home page.</p>
      <Link href="/" className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Back to home</Link>
    </section>
  );
}
