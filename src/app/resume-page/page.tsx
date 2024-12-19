import Resume from 'views/imagerecognition/resume-page';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| PAGE ||============================== //

export default function ResumePage() {
  return (
    <GuestGuard>
      <Resume />
    </GuestGuard>
  );
}
