import Resume from 'views/resume-page';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| PAGE ||============================== //

export default function ResumePage() {
  return (
    <GuestGuard>
      <Resume />
    </GuestGuard>
  );
}
