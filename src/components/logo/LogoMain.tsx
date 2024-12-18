import { Stack } from '@mui/system';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const logo = '/assets/images/PersonalLogoAVID150x150.png'; 

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }: { reverse?: boolean }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent='center' spacing={2}>
      <Image src={logo} alt="AVD" width={50} height={50} />
      <Typography 
        variant="h2"
        sx={{
          fontWeight: 550,        // Bold text
          color: 'black',  // Use theme color
          letterSpacing: '0.5px', // Slight letter spacing
          lineHeight: 1.5,        // Adjust line height for better vertical spacing
          textTransform: 'capitalize', // Capitalize the first letter of each word
        }}
      >
        Portfolio
      </Typography>
    </Stack>
  );
}

