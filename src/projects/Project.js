import React from 'react';
import styles from './Projects.module.css';
import ProjectLink from './ProjectLink';

const Project = ({ project }) => {
  return (
    <div className={styles.Project}>
      <div className={styles.ProjectImage}>
        <picture>
          <source
            media="(max-width:576px)"
            srcSet={`${process.env.PUBLIC_URL}/${project.imageMobile}`}
          />
          <source
            media="(min-width:577px)"
            srcSet={`${process.env.PUBLIC_URL}/${project.image}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/${project.image}`}
            alt={project.title}
          />
        </picture>
      </div>
      <div className={styles.ProjectText}>
        <h4 className={styles.ProjectTitle}>{project.title}</h4>
        <p className={styles.ProjectDesc}>{project.description}</p>
        <div className={styles.ProjectFeatures}>
          <h5>Features:</h5>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.ProjectLinks}>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="Github Repo"
            className={styles.GithubRepo}
          >
            <i className="fab fa-github-square fa-3x"></i>
          </a>
          <ProjectLink url={project.liveUrl}>
            Live Demo
            <i className="fas fa-external-link-alt"></i>
          </ProjectLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
