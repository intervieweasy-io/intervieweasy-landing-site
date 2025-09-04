import styled from 'styled-components';

export const PageWrap = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.size.max};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[6]};
  color: ${({ theme }) => theme.color.textMuted};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const BrandIcon = styled.span`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  font-size: 20px;
  border-radius: 10px;
  background: radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #b86cff, #ff4fd8);
  box-shadow: 0 6px 20px rgba(184,108,255,0.35);
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[12]} ${({ theme }) => theme.space[6]};
`;

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.size.container};
  margin: 0 auto;
  text-align: center;
`;

export const HeroBadge = styled.div`
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #b86cff, #ff4fd8);
  box-shadow: 0 10px 40px rgba(184,108,255,0.40);
`;

export const Title = styled.h1`
  margin-top: ${({ theme }) => theme.space[6]};
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 800;
  font-size: 64px;
  line-height: 1.05;
  letter-spacing: -0.8px;
`;

export const CrackGradient = styled.span`
  background: linear-gradient(90deg, #b86cff 0%, #ff4fd8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  margin: ${({ theme }) => theme.space[4]} auto 0;
  max-width: 720px;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 18px;
  line-height: 1.6;
`;

export const Ctas = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${({ theme }) => theme.space[8]};
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  border: 0;
  cursor: pointer;
  padding: 14px 22px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 700;
  font-size: 15px;
  background: linear-gradient(90deg, #b86cff, #ff4fd8);
  color: #0b0f1d;
  box-shadow: 0 10px 30px rgba(184,108,255,0.45);
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.ring};
  }
`;

export const SecondaryBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.color.cardBorder};
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  padding: 14px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 600;
  font-size: 15px;
  &:hover {
    background: rgba(255,255,255,0.03);
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.ring};
  }
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: ${({ theme }) => theme.space[12]};
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 22px;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.cardBorder};
  text-align: left;
`;

export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #1d253f, #2a3255);
  margin-bottom: 12px;
`;

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
`;

export const CardText = styled.div`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 14px;
  line-height: 1.6;
`;

export const Footer = styled.footer`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textMuted};
  border-top: 1px solid ${({ theme }) => theme.color.cardBorder};
`;
