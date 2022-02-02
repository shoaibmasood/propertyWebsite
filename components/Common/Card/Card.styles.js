import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  cardWrapper: {
    marginBottom: '0.5rem',
    backgroundImage: ({ imgPath }) => `url(${imgPath})`,
    backgroundPosition: '48% 62%',
    minHeight: '22rem',

    '@media screen and (min-width: 1440px)': {
      maxWidth: 345,
    },
    '@media screen and (min-width: 770px)': {
      maxWidth: 330,
    },
  },
  cardContentWrapper: {
    background: `rgb(23, 33, 38,0.3)`,
    color: 'white',
    padding: '20px',
  },
  cardContent: {
    color: 'white',
  },
  cardDesc: {
    minHeight: '11.5rem',
    color: 'white',
  },
});
