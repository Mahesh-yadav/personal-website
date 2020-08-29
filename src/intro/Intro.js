import React from 'react';
import styles from './Intro.module.css';
import NavBar from './NavBar';
import Bubble from './Bubble';

const Intro = () => {
  return (
    <div className={styles.IntroContainer} id="intro">
      <NavBar />
      <div className={styles.bgPart1}></div>
      <div className={styles.bgPart2}></div>
      <div className={styles.bgPart3}></div>
      <div className={styles.bgPart4}></div>
      <div className={styles.bgPart5}>
        <div className={styles.Description}>
          <section className={styles.NameCard}>
            <h4>Hello I'm</h4>
            <h1>Mahesh</h1>
            <h1>Yadav</h1>
            <h3>
              Fullstack <br></br> Developer
            </h3>
          </section>
          <section className={styles.AboutCard}>
            <span>I transform</span>
            <br></br>
            <span>UX/UI designs into</span>
            <br></br>
            <span style={{ color: '#ff6f00', fontSize: '25px' }}>
              digital experiences
            </span>
            <br></br>
            <span>
              using <i className={styles.Highlight}>React</i>,{' '}
              <i className={styles.Highlight}>Sass </i>
              and
            </span>
            <br></br>
            <span>
              <i className={styles.Highlight}>Bootstrap</i>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span>Currenltly experimenting</span>
            <br></br>
            <span>
              with <i className={styles.Highlight}>Typescript</i>,{' '}
              <i className={styles.Highlight}>GraphQL</i>
            </span>
            <br></br>
            <span>
              and{' '}
              <i className={styles.Highlight} title="Test Driven Development">
                TDD
              </i>
            </span>
            <br></br>
          </section>
        </div>
        <Bubble icon="fas fa-code" size="fa-2x" position="BubbleOne" />
        <Bubble icon="fas fa-code-branch" size="fa-2x" position="BubbleTwo" />
        <Bubble icon="fab fa-node-js" size="fa-2x" position="BubbleThree" />
      </div>
    </div>
  );
};

export default Intro;
