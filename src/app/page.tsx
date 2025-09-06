// src/app/page.tsx
import * as s from './styles/landing.css.ts';

const FeatureCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className={s.card}>
    <div className={s.cardIcon}>{icon}</div>
    <div className={s.cardTitle}>{title}</div>
    <div className={s.cardText}>{text}</div>
  </div>
);

const Page = () => {
  return (
    <div className={s.pageWrap}>
      {/* Top nav */}
      <header className={s.nav}>
        <div className={s.brand}>
          <span className={s.brandIcon}>✨</span>
          Karyo
        </div>
        <div>Sign In</div>
      </header>

      {/* Hero */}
      <main className={s.main}>
        <section className={s.container}>
          <div className={s.heroBadge}>✨</div>

          <h1 className={s.title}>
            Track it. <span className={s.crackGradient}>Crack it.</span>
          </h1>

          <p className={s.subtitle}>
            The modern job tracker that helps you land your dream role through smart tracking
            and powerful referral swaps.
          </p>

          <div className={s.ctas}>
            <button className={s.primaryBtn}>
              Start Tracking Free <span style={{ marginLeft: 8 }}>✅</span>
            </button>
            <button className={s.secondaryBtn}>▶️ Watch Demo</button>
          </div>

          {/* Feature cards */}
          <div className={s.features}>
            <FeatureCard
              icon="✅"
              title="Smart Tracking"
              text="Kanban board with 5 stages. Add jobs via link, paste, or voice input."
            />
            <FeatureCard
              icon="👥"
              title="Referral Swap"
              text="Connect with others to exchange referrals and boost your applications."
            />
            <FeatureCard
              icon="📈"
              title="Growth Tracker"
              text="Track progress with analytics and get insights to improve your success rate."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={s.footer}>
        Built with 💜 for job seekers everywhere
      </footer>
    </div>
  );
};

export default Page;
