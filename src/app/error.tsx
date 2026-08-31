"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Что-то пошло не так
      </h2>
      <p className="text-muted-foreground mb-6">
        Произошла ошибка при загрузке страницы. Попробуйте обновить.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
      >
        Попробовать снова
      </button>
    </div>
  );
}
