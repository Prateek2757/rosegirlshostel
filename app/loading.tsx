/** Skeleton shown during route transitions. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 pt-32 pb-16 md:px-6">
      <div className="h-4 w-40 rounded-full bg-muted" />
      <div className="mt-6 h-12 w-3/4 max-w-xl rounded-2xl bg-muted" />
      <div className="mt-4 h-5 w-1/2 max-w-md rounded-full bg-muted" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[4/3] rounded-3xl bg-muted" />
            <div className="h-5 w-2/3 rounded-full bg-muted" />
            <div className="h-4 w-1/2 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}
