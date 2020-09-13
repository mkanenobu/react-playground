import React from "react";
import { useSpring, animated } from "react-spring";

import logo from "./logo.svg";

import styles from "./App.module.css";

const AnimatedLogoImage = () => {
  const [props, set] = useSpring(() => ({
    deg: 0,
    config: { mass: 20, tension: 200 },
  }));
  const transform = (deg: number) => `rotate(${deg}deg)`;

  return (
    <animated.div
      onMouseEnter={() => set({ deg: 360 })}
      onMouseLeave={() => set({ deg: 0 })}
      style={{ transform: props.deg.interpolate(transform) }}
    >
      <img src={logo} className={styles.appLogo} alt="logo" />
    </animated.div>
  );
};

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <AnimatedLogoImage />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
