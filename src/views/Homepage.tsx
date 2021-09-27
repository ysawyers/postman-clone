import React from 'react';
import NavBarHome from '../containers/NavBarHome';
import postmanDemo from '../images/postman-demo.png';
import About from '../components/Homepage/About';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parentContainer: {
    display: 'flex',
    width: '100%',
    height: '70vh',
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '45%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  rightContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'cover',
  },
});

const Homepage = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div className='Homepage' style={{ width: '100%' }}>
      <NavBarHome />
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <About />
        </div>
        <div className={styles.rightContainer}>
          <img src={postmanDemo} alt='Postman Demo' className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
