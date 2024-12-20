// next
import Image from 'next/image';

// ==============================|| LOGO ICON SVG ||============================== //

const logoIcon = '/assets/images/PersonalLogoAVID150x150.png'; // Corrected path

export default function LogoIcon() {
  return <Image src={logoIcon} alt="AVD" width={50} height={50} />;
}
