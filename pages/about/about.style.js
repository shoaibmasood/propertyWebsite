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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3.9rem',
    marginBottom: '3.9rem',
    '@media screen and (max-width: 1024px)': {
      padding: '0 5rem',
    },
  },

  aboutHeading1: {
    marginBottom: '1.25rem',
  },
  aboutDesc1: {
    marginBottom: '1.25rem',
  },
  aboutimg1Container: {
    display: 'flex',
    justifyContent: 'center',
  },
  aboutHeading2: {
    marginTop: '3.125rem',
    marginBottom: '1.25rem',
  },
  aboutDesc2: {
    marginBottom: '1.25rem',
  },
  aboutCardsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',

    marginTop: '2rem',
    marginBottom: '2rem',
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  aboutRealStateContainer: {
    display: 'flex',
    marginTop: '3.9rem',
    marginBottom: '1.25rem',

    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  aboutHeading3: {
    marginBottom: '1.25rem',
  },
  aboutDesc3: {
    '@media screen and (min-width: 1025px)': {
      maxWidth: '33.8rem',
    },
  },

  aboutHeading4: {
    marginBottom: '1.25rem',
  },
  aboutDesc4: {
    marginBottom: '1.25rem',
  },
  aboutBtn: {
    backgroundColor: '#ff6161',
    '&:hover': {
      backgroundColor: '#ce0606',
    },
  },
});
