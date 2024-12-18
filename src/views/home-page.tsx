'use client'
// material-ui
import Typography from '@mui/material/Typography';
import { Button, Divider, Box, Link , IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

// project imports
import MainCard from 'components/MainCard';

import { useTheme } from '@mui/material/styles';

// ==============================|| HOME PAGE ||============================== //

export default function HomePage() {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = () => {
    router.push('/image-page'); 
  };
  
  return (
    <MainCard
      title="Alvaro Valdez-Duran"
      sx={{
        boxShadow: 3,
        padding: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        maxWidth: '900px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
        Welcome to the Image Recognition App
      </Typography>

      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
        About This Project: Welcome to the Image Recognition App, a web-based platform designed to analyze and identify the content of uploaded images using cutting-edge AI technology. This project demonstrates the integration of powerful backend services, an interactive frontend, and cloud-based AI solutions to deliver a seamless and innovative user experience.
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Key Features:
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>AI-Powered Image Analysis:</strong> Identify objects, scenes, and other elements in your images using Azure Computer Vision.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Intuitive Interface:</strong> A modern, responsive design built with Next.js and Material UI for a clean and easy-to-navigate experience.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Fast and Secure:</strong> Backend powered by Node.js with Express.js, ensuring quick processing and secure handling of your images.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Cloud Integration:</strong> Deployed with Render for backend APIs and GitHub Pages for the frontend, demonstrating a scalable and cost-efficient approach.
        </Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Why This Project?
      </Typography>

      <Typography variant="body1" paragraph>
        This project is a showcase of my ability to build full-stack applications that combine:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Frontend Development:</strong> Modern design and responsiveness using React and Next.js.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Backend Engineering:</strong> Building robust APIs with Node.js, Express.js, and secure file handling.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Cloud and AI Integration:</strong> Leveraging Azure Cognitive Services for real-world AI applications.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>DevOps Practices:</strong> Deployment and hosting using GitHub Pages and Render for a reliable production environment.
        </Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Explore and Try It Out!
      </Typography>

      <Typography variant="body1" paragraph>
        Upload an image and see how the app can detect and describe the content. Whether it's objects, landmarks, or scenes, this app aims to provide an accurate analysis powered by state-of-the-art AI technology.
      </Typography>

      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '25px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={handleClick}
        >
          Upload Your Image
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
          Connect with me
        </Typography>
        
        <Box>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/alvaro-valdez-duran/"
            target="_blank"
            sx={{ margin: 1 }}
          >
            <LinkedIn fontSize="large" color="primary" />
          </IconButton>

          <IconButton
            component={Link}
            href="https://github.com/AlvVal282"
            target="_blank"
            sx={{ margin: 1 }}
          >
            <GitHub fontSize="large" color="primary" />
          </IconButton>
        </Box>
        <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            component={Link}
            href= "/resume-page"
            target="_blank"
          >
            View My Resume
          </Button>
      </Box>
    </MainCard>
  );
}
