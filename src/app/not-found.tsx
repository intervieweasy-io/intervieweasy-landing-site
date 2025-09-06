import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p >
        The page you&apos;re looking for doesn&apos;t exist. Check the URL or return to the home page.
      </p>
      <Link href="/">Go home</Link>
    </div>
  );
}