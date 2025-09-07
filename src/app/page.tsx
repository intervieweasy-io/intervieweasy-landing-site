const FeatureCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div>
    <div>{icon}</div>
    <div>{title}</div>
    <div>{text}</div>
  </div>
);

const Page = () => {
  return (
    <div>
      {/* Top nav */}
      <header>
        <div>
          <span>✨</span>
          Karyo
        </div>
        <div>Sign In</div>
      </header>

      {/* Hero */}
      <main>
        <section>
          <div>✨</div>

          <h1>
            Track it. <span>Crack it.</span>
          </h1>

          <p>
            The modern job tracker that helps you land your dream role through smart tracking
            and powerful referral swaps.
          </p>

          <div>
            <button>
              Start Tracking Free <span style={{ marginLeft: 8 }}>✅</span>
            </button>
            <button>▶️ Watch Demo</button>
          </div>

          {/* Feature cards */}
          <div>
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
      <footer>
        Built with 💜 for job seekers everywhere
      </footer>
    </div>
  );
};

export default Page;
