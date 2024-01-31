'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Index() {
  const header = useRef(null);
  const isActiveRef = useRef(false); // Use ref to store the current value of isActive
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActiveRef.current) setIsActive(false); // Check the ref value instead of the state
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => gsap.to(button.current, { scale: 1, duration: 0.25, ease: 'power1.out' }),
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: 'power1.out' });
          isActiveRef.current = false; // Update the ref value
        },
      },
    });
  }, [isActiveRef]); // Include the ref in the dependency array

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>|</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Portfolio</p>
            <p className={styles.dennis}>Francis</p>
            <p className={styles.snellenberg}>Tamondong</p>
          </div>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a>Projects</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Contact</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded onClick={() => (isActiveRef.current = !isActiveRef.current)} className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActiveRef.current ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActiveRef.current && <Nav />}
      </AnimatePresence>
    </>
  );
}