import { createFileRoute } from '@tanstack/react-router';
import helloImage from '@/assets/hello-image.png';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950">
      <img src={helloImage} alt="Decorative" className="max-w-xs rounded-xl" />
      <h1 className="text-4xl font-bold text-slate-100">Hello, World!</h1>
    </div>
  );
}
