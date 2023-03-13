import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.css';

const AboutPage = (props) => {
  return(<div className={styles.AboutPage}>
     <h1>Esto es la ABOUT</h1>
  </div>)
};

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
