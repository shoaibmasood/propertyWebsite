import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  servicesLayoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3.9rem',
    marginBottom: '3.9rem',
    '@media screen and (min-width: 1440px)': {
      padding: '0 25rem',
    },
    '@media screen and (max-width: 1440px)': {
      padding: '0 5rem',
    },
  },
  servicesLayoutHeadings: {
    marginBottom: '1.25rem',
  },
});
