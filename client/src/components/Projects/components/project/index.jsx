import React from 'react';
import styles from './style.module.scss';

export default function Index({ index, title, manageModal }) {
  const handleMouseEnter = (e) => {
    manageModal(true, index, e.clientX, e.clientY);
  };

  const handleMouseLeave = (e) => {
    manageModal(false, index, e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    manageModal(true, index, touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    manageModal(false, index, touch.clientX, touch.clientY);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Software and App Development</p>
    </div>
  );
}
