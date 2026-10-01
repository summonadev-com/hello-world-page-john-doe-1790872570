import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <h1 className="text-4xl font-bold text-slate-100">Hello, World!</h1>
    </div>
  );
}
