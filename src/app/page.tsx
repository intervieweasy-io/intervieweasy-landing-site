import { ReactNode } from 'react';
import { ChartAreaIcon, Check, CircleCheck, Play, Search, UserIcon, Zap } from 'lucide-react';

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <div className="rounded-lg bg-gray-900 p-6 text-center">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-2xl">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{text}</p>
  </div>
);

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top nav */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between py-6 px-4">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-purple-400"><Zap /></span>
          Karyo
        </div>
        <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
          Sign In
        </a>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center">
        <section className="mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-purple-900/50">
            <span className="text-2xl"><Search/></span>
          </div>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Track it. <span className="text-purple-400">Crack it.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-gray-400">
            The modern job tracker that helps you land your dream role through smart tracking and
            powerful referral swaps.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-500">
              Start Tracking Free <span className='ml-2'><CircleCheck size={20}/></span>
            </button>
            <button className="flex rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-gray-200 hover:bg-gray-800">
             <span className='mr-2'><Play size={20}/></span> Watch Demo
            </button>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              icon={<Check/>}
              title="Smart Tracking"
              text="Kanban board with 5 stages. Add jobs via link, paste, or voice input."
            />
            <FeatureCard
              icon={<UserIcon/>}
              title="Referral Swap"
              text="Connect with others to exchange referrals and boost your applications."
            />
            <FeatureCard
              icon={<ChartAreaIcon/>}
              title="Growth Tracker"
              text="Track progress with analytics and get insights to improve your success rate."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
        Built with 💜 for job seekers everywhere
      </footer>
    </div>
  );
};

export default Page;
