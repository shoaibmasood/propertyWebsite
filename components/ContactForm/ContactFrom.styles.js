import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  contactusBtnContanier: {
    display: 'flex',
    justifyContent: 'center',
  },
  contactusBtn: {
    backgroundColor: '#ff6161',
    marginTop: '1.5rem',
    '&:hover': {
      backgroundColor: '#ce0606',
    },
  },

  drawer: {
    '& .MuiPaper-root': {
      marginTop: '7rem',
      // height: '61vh',
      width: '35vw',
      '@media screen and (max-width: 780px)': {
        width: '60vw',
      },
      '@media screen and (max-width: 425px)': {
        width: '95vw',
      },
    },
  },

  contactFormContainer: {
    marginTop: '1rem',
  },
  contactFormTitle: {
    padding: '20px',
    backgroundColor: '#ff6161',
    color: 'white',
  },

  contactFormHeading: {
    marginBottom: '2rem',
    color: '#ff6161',
  },

  contactFormTextArea: {
    marginTop: '2rem',
    borderColor: 'rgb(0, 0, 0,0.3)',
    borderRadius: '6px',
    '&:focus': {
      borderColor: 'red',
    },
  },

  contactFormBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    '& > button': {
      marginLeft: '1rem',
    },
  },
});
