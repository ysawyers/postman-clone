import React from 'react';
import postmanLogo from '../images/postman-logo.png';
import { AppBar, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  parentContainer: {
    display: 'flex',
    width: '100%',
    color: 'black',
  },
  childContainer: {
    marginLeft: 'auto',
  },
});

const navBarStyling = {
  backgroundColor: '#FFFFFF',
  padding: 1,
};

const signInStyling = {
  marginRight: '10px',
  textTransform: 'none',
  color: '#4C4C4C',
  borderColor: '#D6D6D6',
} as const;

const signUpStyling = {
  textTransform: 'none',
  color: '#FFFFFF',
  backgroundColor: '#FE6C37',
  '& .hover': {
    backgroundColor: '#Ef4E14',
  },
} as const;

const NavBarHome = (): JSX.Element => {
  const history = useHistory();

  const changeRoute = (newRoute: string) => {
    history.push(`/${newRoute}`);
  };

  const styles = useStyles();
  return (
    <AppBar position='sticky' elevation={0} sx={navBarStyling}>
      <div className={styles.parentContainer}>
        <img src={postmanLogo} alt='Postman Logo' width={50} height={50} />
        <div className={styles.childContainer}>
          <Button
            variant='outlined'
            sx={signInStyling}
            onClick={() => {
              changeRoute('login');
            }}
          >
            Sign In
          </Button>

          <Button
            sx={signUpStyling}
            onClick={() => {
              changeRoute('register');
            }}
          >
            Sign Up For Free
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default NavBarHome;
