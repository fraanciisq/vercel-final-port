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
        // Check if the clicked project is "TOPSystem" or "Eco Pro WP" before redirecting
        if (title === 'TOPSystem - Oracle') {
            // Replace 'your-link-here' with the actual link for "TOPSystem"
            const projectLink = 'https://tops.net.ph';
            window.location.href = projectLink;
        } else if (title === 'Eco Pro WP') {
            // Redirect to www.ecoprodisinfectpm.com for "Eco Pro WP"
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
