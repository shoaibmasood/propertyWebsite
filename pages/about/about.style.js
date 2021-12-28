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
});
