import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  testimonialContainer: {
    marginTop: '3.8rem',
    marginBottom: '3.8rem',
    '& .slick-slider > svg': {
      color: '#ff6161',
    },
  },
  testimonialIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3.3rem',
    '& svg': {
      fontSize: '5.18rem',
      color: '#ff6161',
    },
  },
  testimonialContent: {
    marginBottom: '1rem',
  },
});
