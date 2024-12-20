import IRecognition from 'views/imagerecognition/image-page';
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| PAGE ||============================== //

export default function ImageViewPage() {
  return (
    <GuestGuard>
      <IRecognition />
    </GuestGuard>
  );
}
