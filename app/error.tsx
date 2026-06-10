"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="rounded-3xl border border-red-500/20 bg-zinc-900 p-8">
        <h2 className="mb-2 text-2xl font-bold text-red-400">
          Something went wrong
        </h2>

        <p className="text-gray-400">
          {error.message}
        </p>
      </div>
    </main>
  );
}