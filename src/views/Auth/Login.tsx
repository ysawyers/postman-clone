import React from 'react';
import Center from '../../components/Login/Center';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: '100vh',
  },
});

const Login = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.parentContainer}>
      <Center />
    </div>
  );
};

export default Login;
