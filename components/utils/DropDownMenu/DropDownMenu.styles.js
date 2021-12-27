import { makeStyles } from '@mui/styles';

import { styled } from '@mui/material/styles';
import DropDownMenu from './DropDownMenu';

// export const useStyles = makeStyles({
//   dropdownBtn: {
//     color: 'black',
//     padding: 0,
//     '&:hover': {
//       color: 'red',
//     },
//   },

//   menu: {
//     '& ul': {
//       backgroundColor: 'black',
//       color: 'white',
//     },
//     '& ul > li:hover': {
//       color: 'red',
//     },
//   },
// });

export const BootstrapDropDownMenu = styled(DropDownMenu)({
  'MuiButton-root': {
    color: 'black',
    padding: 0,
    '&:hover': {
      color: 'red',
    },
  },
  'MuiPapper-root': {
    '& ul': {
      backgroundColor: 'black',
      color: 'white',
    },
    '& ul > li:hover': {
      color: 'red',
    },
  },
});
