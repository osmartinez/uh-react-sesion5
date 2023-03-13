import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPage.module.css';
import { useParams } from 'react-router-dom';
const UserPage = () => {

  const {id} = useParams()

  return(
  <div className={styles.UserPage}>
    UserPage Component {id}
  </div>)
};

UserPage.propTypes = {};

UserPage.defaultProps = {};

export default UserPage;
