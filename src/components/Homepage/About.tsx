import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  title: {
    fontFamily: 'Inter, monospace',
    fontWeight: 900,
    fontSize: '2em',
    lineHeight: 1.5,
  },
  body: {
    fontFamily: 'Inter, monospace',
    fontWeight: 100,
    lineHeight: 2,
    width: '100%',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  smallNote: {
    marginTop: '20px',
    fontFamily: 'Inter, monospace',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#6B6B6B',
  },
});

const About = (): JSX.Element => {
  // const [email, setEmail] = useState('');

  const styles = useStyles();
  return (
    <div className='About'>
      <div className={styles.parentContainer}>
        <h1 className={styles.title}>Build</h1>
        <h1 className={styles.title}>APIs together</h1>
        <p className={styles.body}>Over 15 million developers use Postman. Get started by signing up or downloading the desktop app.</p>
      </div>
    </div>
  );
};

export default About;
