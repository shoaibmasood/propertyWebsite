import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  contactusBanner: {
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
  contactusContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.56rem 3.125rem',
  },
  contactusMap: {
    width: '100%',
    height: '40vh',
  },
  contactusBtnContanier: {
    display: 'flex',
    justifyContent: 'center',
  },
  contactusBtn: {
    backgroundColor: '#ff6161',
    marginTop: '1.5rem',
    '&:hover': {
      backgroundColor: '#ce0606',
    },
  },
});
