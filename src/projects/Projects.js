import React, { useState } from 'react';
import Project from './Project';
import ProjectControl from './ProjectControls';
import styles from './Projects.module.css';

const Projects = ({ projects, title }) => {
  const [currentProject, setCurrentProject] = useState(0);

  const setNextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const setPrevProject = () => {
    if (currentProject === 0) {
      setCurrentProject(projects.length - 1);
    } else {
      setCurrentProject(currentProject - 1);
    }
  };

  return (
    <div className={styles.Projects}>
      <h3 className={styles.CategoryTitle}>{title}</h3>
      <ProjectControl
        current={currentProject + 1}
        total={projects.length}
        setNextProject={setNextProject}
        setPrevProject={setPrevProject}
      />
      <Project project={projects[currentProject]} />
    </div>
  );
};

export default Projects;
