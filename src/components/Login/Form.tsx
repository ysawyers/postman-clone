import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  parentContainer: {
    marginTop: '20px',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  inputField: {
    display: 'block',
    fontSize: '14px',
    color: '#282828',
    borderRadius: '3px',
    boxShadow: 'none',
    '-moz-box-shadow': 'none',
    '-o-box-shadow': 'none',
    '-webkit-box-shadow': 'none',
    border: '1px solid #d4d4d4',
    padding: '8px',
    lineHeight: '1.42857143',
    backgroundColor: '#FAFAFA',
    backgroundImage: 'none',
  },
  signInButton: {
    display: 'inline-block',
    padding: '10px 16px',
    'margin-bottom': 0,
    'font-size': '14px',
    'font-weight': 400,
    'line-height': 1.42857143,
    'text-align': 'center',
    'white-space': 'nowrap',
    'vertical-align': 'middle',
    '-ms-touch-action': 'manipulation',
    'touch-action': 'manipulation',
    cursor: 'pointer',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
    'background-image': 'none',
    border: '1px solid transparent',
    'border-radius': '3px',
    backgroundColor: '#FF6C37',
    color: 'white',
  },
});

const Form = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const onSubmit = () => {
    const data = {
      usernameOrEmail,
      password,
    };
    axios
      .post('http://127.0.0.1:5000/auth/login', data)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          history.push('/workspace');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styles = useStyles();
  return (
    <div className={styles.parentContainer}>
      <form className={styles.form}>
        <span style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'Inter, monospace', marginBottom: '5px' }}>Email or Username</span>
        <input
          className={styles.inputField}
          onChange={(e) => {
            setUsernameOrEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <span style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'Inter, monospace', marginBottom: '5px' }}>Password</span>
        <input
          type='password'
          className={styles.inputField}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button className={styles.signInButton} type='button' onClick={onSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
