import Link from 'next/link';
import * as s from './not-found.styles';

export default function NotFound() {
  return (
    <s.Wrapper>
      <s.Title>Page not found</s.Title>
      <s.Subtitle>
        The page you&apos;re looking for doesn&apos;t exist. Check the URL or return to the home page.
      </s.Subtitle>
      <Link href="/">Go home</Link>
    </s.Wrapper>
  );
}