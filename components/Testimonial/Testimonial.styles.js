import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  testimonialContainer: {
    display: 'flex',
    marginTop: '3.8rem',
    marginBottom: '3.8rem',
    '& .slick-slider > svg': {
      color: '#ff6161',
    },
  },
  testimonialSlider: {
    '& .slick-slider': {
      '@media screen and (max-width: 325px)': {
        maxWidth: '17rem',
      },
      '@media screen and (min-width: 370px)': {
        maxWidth: '20rem',
      },
      '@media screen and (min-width: 700px)': {
        maxWidth: '35rem',
      },
      '@media screen and (min-width: 1020px)': {
        maxWidth: '48rem',
      },
    },
    // maxWidth: '48rem',
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
