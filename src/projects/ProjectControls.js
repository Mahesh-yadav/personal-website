import React from 'react';
import styles from './Projects.module.css';

const ProjectControls = ({
  current,
  total,
  setNextProject,
  setPrevProject,
}) => {
  return (
    <div className={styles.ProjectControls}>
      <p>
        {current} of {total}
      </p>
      <button className={styles.Button} onClick={setPrevProject}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className={styles.Button} onClick={setNextProject}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ProjectControls;
