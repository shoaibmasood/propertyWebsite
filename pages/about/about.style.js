import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  aboutBanner: {
    backgroundImage: 'url(/backgroundheader.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '30vh',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      minHeight: '30vh',
    },
  },

  aboutContainer: {
    marginTop: '3.9rem',
    marginBottom: '3.9rem',
  },

  aboutHeading1: {
    marginBottom: '1.25rem',
  },
  aboutDesc1: {
    marginBottom: '1.25rem',
  },

  aboutHeading2: {
    marginTop: '3.125rem',
    marginBottom: '1.25rem',
  },
  aboutDesc2: {
    marginBottom: '1.25rem',
  },
  aboutCardsContainer: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  aboutRealStateContainer: {
    marginTop: '3.9rem',
    marginBottom: '1.25rem',
  },

  aboutHeading3: {
    marginBottom: '1.25rem',
  },
  aboutHeading4: {
    marginBottom: '1.25rem',
  },
  aboutDesc4: {
    marginBottom: '1.25rem',
  },
  aboutBtn: {
    backgroundColor: '#ff6161',
    // '& hover': {
    //   backgroundColor: '#ce0606',
    // },
  },
});
