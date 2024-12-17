// project import
import GuestGuard from 'utils/route-guard/GuestGuard';
import Home from 'views/home-page';

export default function HomePage() {
  return (
    <GuestGuard>
      <Home />
    </GuestGuard>
  );
}
