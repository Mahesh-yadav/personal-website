import React from 'react';
import styles from './Intro.module.css';

const Bubble = ({ icon, size, position }) => {
  return (
    <div className={styles[position]}>
      <div className={styles.OuterCircle}>
        <div className={styles.SmallCircle}></div>
        <div className={styles.LargeCircle}>
          <i className={`${icon} ${size}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
