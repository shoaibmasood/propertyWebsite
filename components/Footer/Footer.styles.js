import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    '@media screen and (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },

    paddingTop: '3rem',
    paddingBottom: '0.5rem',
    '@media screen and (min-width: 768px)': {
      justifyContent: 'space-evenly',
    },
    '@media screen and (min-width: 1024px)': {
      justifyContent: 'space-around',
    },
    '@media screen and (min-width: 1400px)': {
      justifyContent: 'space-evenly',
    },
  },
  footerLink: {
    display: 'flex',
    '& a:hover': {
      color: 'red',
    },
  },
  footerLinkCol1: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '3rem',
    '& a': {
      marginBottom: '0.5rem',
    },
  },
  footerLinkCol2: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      marginBottom: '0.5rem',
    },
  },

  footerAddress: {
    '& p': {
      marginBottom: '0.5rem',
    },
  },
  footerIcon: {
    '& svg': {
      marginRight: '0.2rem',
    },
    '& svg:hover': {
      color: 'red',
      cursor: 'pointer',
    },
  },
});
