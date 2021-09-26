import React from 'react';
import NavBarHome from '../containers/NavBarHome';
import postmanDemo from '../images/postman-demo.png';
import About from '../components/Homepage/About';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parentContainer: {
    display: 'flex',
  },
});

const Homepage = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div className='Homepage'>
      <NavBarHome />
      <div className={styles.parentContainer}>
        <div>
          <About />
        </div>
        <div>
          <img src={postmanDemo} height={200} width={200} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
