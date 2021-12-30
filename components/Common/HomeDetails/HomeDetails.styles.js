import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  detailsContainer: {
    marginTop: '7rem',
    marginBottom: '7rem',
  },
  iconsDetails: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    '& svg': {
      fontSize: '2.8rem',
      color: '#ff6161',
    },
  },
  headingDetails: {
    marginBottom: '2rem',
  },

  contentDetails: {
    marginLeft: '1rem',
  },
});
