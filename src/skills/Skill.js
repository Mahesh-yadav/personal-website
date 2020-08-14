import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import styles from './Skill.module.css';

const color = {
  frontend: '#1db489',
  backend: '#ff52bf',
  tools: '#f25f3a',
};

const Skill = ({ skill }) => {
  return (
    <div className={styles.Skill}>
      <PieChart
        data={[{ value: 1, color: color[skill.category] }]}
        lineWidth={15}
        reveal={skill.level}
        rounded
        animate
        animationDuration={1000}
        label={() => `${skill.level}%`}
        labelPosition={0}
        labelStyle={{
          stroke: color[skill.category],
        }}
        background="#dddddd"
      />
      <div className={styles.SkillName}>
        <h3 style={{ color: color[skill.category] }}>{skill.name}</h3>
      </div>
    </div>
  );
};

export default Skill;
