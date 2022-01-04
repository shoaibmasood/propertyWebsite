import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  parallaxSection: {
    backgroundImage: 'url(/laptop-coffee-parallax.jpg)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '40vh',
    '&:before': {
      content: '""',
      position: 'absolute',
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      minHeight: '40vh',
    },
    '& h4': {
      marginBottom: '1rem',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parallaxSectionContent: {
    zIndex: 111,
  },
});
