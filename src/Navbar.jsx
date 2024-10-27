import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [active, setIsactive] = useState(false);

  function navActive() {
    setIsactive(!active);
  }

  return (
    <nav>
      <div className={styles.tip }>
        <h1>BRAND</h1>

        <button onClick={() => navActive()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      { active && 
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about </a>
          </li>
          <li>
            <a href="#">services </a>
          </li>
          <li>
            <a href="#">pricing </a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      }
    </nav>
  );
};

const Navbr = () => {
  return <h1>testing nav</h1>;
};

export default Navbar;
