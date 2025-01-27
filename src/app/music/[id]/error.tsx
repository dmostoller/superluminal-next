"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center p-4">
      <h2 className="text-red-500">Something went wrong:</h2>
      <pre className="text-sm">{error.message}</pre>
      <button
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-black"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
