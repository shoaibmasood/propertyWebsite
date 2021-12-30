import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '3rem',
    paddingBottom: '0.5rem',
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
    marginRight: '3.5rem',
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
