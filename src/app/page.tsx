'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GuestGuard from 'utils/route-guard/GuestGuard';
import Home from 'views/home-page';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <GuestGuard>
      <Home />
    </GuestGuard>
  );
}
