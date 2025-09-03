import Link from 'next/link';
import * as s from './styles/not-found.css'

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Page not found</h1>
      <p className={s.subtitle}>
        The page you&apos;re looking for doesn&apos;t exist. Check the URL or return to the home page.
      </p>
      <Link href="/">Go home</Link>
    </div>
  );
}