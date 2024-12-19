import About from 'views/imagerecognition/about-page';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| PAGE ||============================== //

export default function AboutViewPage() {
  return (
    <GuestGuard>
      <About />
    </GuestGuard>
  );
}
