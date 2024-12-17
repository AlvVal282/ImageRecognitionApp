import Home from 'views/home-page';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| PAGE ||============================== //

export default function HomeViewPage() {
  return (
    <GuestGuard>
      <Home />
    </GuestGuard>
  );
}
