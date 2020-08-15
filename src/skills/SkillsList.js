import React from 'react';
import Skill from './Skill';
import SectionTitle from '../components/SectionTitle';
import styles from './SkillsList.module.css';
import data from './skills.json';

const SkillsList = () => {
  // Fisher-Yates shuffle Algorithm
  const shuffleSkills = (skills) => {
    for (let i = skills.length - 1; i > 0; i--) {
      // random index from 0 to i
      let j = Math.floor(Math.random() * (i + 1));

      [skills[i], skills[j]] = [skills[j], skills[i]];
    }

    return skills;
  };

  return (
    <div className="container">
      <SectionTitle title="Skills" />
      <div className={styles.SkillsList}>
        {shuffleSkills(data).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
