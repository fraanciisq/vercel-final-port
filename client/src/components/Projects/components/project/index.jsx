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

    const handleProjectClick = () => {
        // Validate Title
        if (title === 'TOPSystem - Oracle') {
            // Redirect to Tops PH
            const projectLink = 'https://tops.net.ph';
            window.location.href = projectLink;
        } else if (title === 'Eco Pro WP') {
            // Redirect to Eco Pro Link
            window.location.href = 'https://www.ecoprodisinfectpm.com';
        } else if (title === 'Car Counter - Python') {
            window.location.href = 'https://drive.google.com/file/d/1ZrJPN865rCGkp7gP1P5vUaMaUjcil33G/view?usp=sharing';

        }
    };

    return (
        <div
            onClick={() => handleProjectClick()}
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
