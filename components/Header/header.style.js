import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  appbar: {
    background: 'rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  toolbar: {
    display: 'flex',
    flex: '0.3',
    '@media screen and (min-width: 1024px)': {
      justifyContent: 'space-around',
    },
    '@media screen and (min-width: 1400px)': {
      justifyContent: 'center',
    },
  },

  logoImage: {
    '@media screen and (min-width: 768px)': {
      flex: '0.2',
    },
  },
  headerlink: {
    flex: '0.6',
    display: 'flex',
    '@media screen and (min-width:1024px)': {
      justifyContent: 'space-around',
    },

    '@media screen and (min-width: 768px)': {
      justifyContent: 'space-evenly',
    },

    // '& a ': {
    //   marginRight: '2rem ',
    // },
    '& a:hover': {
      color: 'red',
    },
  },

  headerIcon: {
    flex: '0.1',
    // marginRight: '5rem',
    '& svg': {
      marginRight: '0.2rem',
    },
    '& svg:hover': {
      color: 'red',
      cursor: 'pointer',
    },

    // border: '1px solid lightblue',
  },
});
