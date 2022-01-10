import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  dropdownBtn: {
    color: 'white',
    padding: 0,
    '&:hover': {
      color: 'red',
    },
  },

  menu: {
    '& ul': {
      backgroundColor: 'black',
      color: 'white',
    },
    '& ul > li:hover': {
      color: 'red',
    },
  },
});
