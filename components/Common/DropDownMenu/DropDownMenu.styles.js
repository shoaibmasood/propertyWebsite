import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  dropdownBtn: {
    color: 'white',
    fontSize: '1rem',
    lineHeight: '24px',
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
