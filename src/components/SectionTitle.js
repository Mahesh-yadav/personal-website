import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.SectionTitle}>
      <h2>{title}</h2>
      <div className={styles.BarSm}></div>
      <div className={styles.BarLg}></div>
    </div>
  );
};

export default SectionTitle;
