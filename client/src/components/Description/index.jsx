import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {
  const phrase = "I am John Francis Llarena Tamondong, a graduating student of Computer Engineering. That strives to push the boundaries of innovation.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, Index) => (
            <span key={Index} className={styles.mask}>
              <motion.span variants={slideUp} custom={Index} animate={isInView ? "open" : "closed"} key={Index}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className={styles.descriptionText}>
          Passionate about design, coding, and interactive tech, I&rsquo;m uniquely positioned in the software engineering world, ready to create impactful solutions
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
