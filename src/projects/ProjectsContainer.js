import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Projects from './Projects';
import data from './projects.json';

const ProjectsContainer = () => {
  const getCategories = () => {
    const categories = new Set();

    for (const project of data) {
      categories.add(project.category);
    }

    return [...categories];
  };

  const categories = getCategories();

  return (
    <div className="container">
      <SectionTitle title="Projects" />
      {categories.map((category) => (
        <Projects
          key={category}
          projects={data.filter((project) => project.category === category)}
          title={category[0].toUpperCase() + category.slice(1)}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
