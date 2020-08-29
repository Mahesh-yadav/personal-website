import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && bgColor === 'transparent') {
        setBgColor('#f48fb1');
      } else if (window.scrollY < 50 && bgColor === '#f48fb1') {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bgColor]);

  return (
    <nav className={styles.NavBar} style={{ backgroundColor: bgColor }}>
      <ul className={styles.NavLinks}>
        <li>
          <a className={styles.NavLink} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className={styles.NavLink} href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
