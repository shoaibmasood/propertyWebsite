import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  homeBtn: {
    borderColor: 'white',
    color: 'white',
    borderWidth: '',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'white',
    },
  },
});
