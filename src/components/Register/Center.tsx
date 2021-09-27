import React, { useEffect, useRef, useState } from 'react';
import Form from '../../components/Register/Form';
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore
import GoogleLoginButton from 'react-google-login-button';

const useStyles = makeStyles({
  childContainer: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
    borderRadius: '3px',
    padding: 25,
    width: '25%',
  },
  pmLogo: {
    background: 'url(https://static.getpostman.com/assets/pm-logo-1.svg) no-repeat center',
    backgroundSize: '104px 110px',
    width: '104px',
    height: '110px',
  },
  header: {
    display: 'flex',
    fontFamily: 'Inter, monospace',
    fontWeight: 'bold',
    fontSize: '13px',
    marginTop: '20px',
  },
  divide: {
    height: '1px',
    width: '100%',
    borderTop: 'solid thin #F0F0F0',
    margin: '24px 0',
    textAlign: 'center',
  },
});

const Center = () => {
  const parentContainerRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (parentContainerRef.current) {
      // @ts-ignore
      let width = parentContainerRef.current.offsetWidth;
      setWidth(width);
    }
  }, [parentContainerRef]);

  const styles = useStyles();
  return (
    <div className={styles.childContainer}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.pmLogo}></div>
      </div>
      <div className={styles.header}>
        <h3 style={{ fontSize: '18px' }}>Sign Up</h3>
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          <a href='/login' style={{ marginRight: '5px' }}>
            Login
          </a>
          <p>instead?</p>
        </div>
      </div>
      <Form />
      <div style={{ display: 'flex', alignItems: 'center' }} ref={parentContainerRef}>
        <div className={styles.divide} style={{ marginLeft: '20px' }}></div>
        <p style={{ marginLeft: '20px', marginRight: '20px', fontFamily: 'Inter, monospace', fontSize: '13px', fontWeight: 'bold' }}>or</p>
        <div className={styles.divide} style={{ marginRight: '20px' }}></div>
      </div>
      <GoogleLoginButton
        googleClientId='YOUR_GOOGLE_CLIENT_ID_HERE'
        onLoginSuccess={() => {
          console.log('Hello World');
        }}
        onLoginFailure={() => {
          console.log('Login failed');
        }}
        width={width}
        height={40}
        longTitle={true}
        theme='dark'
      />
    </div>
  );
};

export default Center;
