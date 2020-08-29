import React from 'react';
import SkillsList from './skills/SkillsList';
import ProjectsContainer from './projects/ProjectsContainer';
import Intro from './intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <SkillsList />
      <ProjectsContainer />
    </div>
  );
}

export default App;
