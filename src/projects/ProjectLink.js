import React from 'react';
import styles from './Projects.module.css';

const ProjectLink = ({ children, url }) => {
  return (
    <a
      href={url}
      className={styles.ProjectDemo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ProjectLink;
