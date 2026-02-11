export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-primary-light/50">
      <span className="text-lg font-semibold tracking-wide">Master Media</span>

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />
    </div>
  );
}
