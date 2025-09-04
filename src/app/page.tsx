// src/app/page.tsx
import * as s from './landing.styles';
import React from 'react';

const FeatureCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <s.Card>
    <s.CardIcon>{icon}</s.CardIcon>
    <s.CardTitle>{title}</s.CardTitle>
    <s.CardText>{text}</s.CardText>
  </s.Card>
);

const Page = () => {
  return (
    <s.PageWrap>
      {/* Top nav */}
      <s.Nav>
        <s.Brand>
          <s.BrandIcon>✨</s.BrandIcon>
          Karyo
        </s.Brand>
        <div>Sign In</div>
      </s.Nav>

      {/* Hero */}
      <s.Main>
        <s.Container>
          <s.HeroBadge>✨</s.HeroBadge>

          <s.Title>
            Track it. <s.CrackGradient>Crack it.</s.CrackGradient>
          </s.Title>

          <s.Subtitle>
            The modern job tracker that helps you land your dream role through smart tracking
            and powerful referral swaps.
          </s.Subtitle>

          <s.Ctas>
            <s.PrimaryBtn>
              Start Tracking Free <span style={{ marginLeft: 8 }}>✅</span>
            </s.PrimaryBtn>
            <s.SecondaryBtn>▶️ Watch Demo</s.SecondaryBtn>
          </s.Ctas>

          {/* Feature cards */}
          <s.Features>
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
          </s.Features>
        </s.Container>
      </s.Main>

      {/* Footer */}
      <s.Footer>Built with 💜 for job seekers everywhere</s.Footer>
    </s.PageWrap>
  );
};

export default Page;
