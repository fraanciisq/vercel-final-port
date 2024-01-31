import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Index({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const magneticElement = magnetic.current; // Store the current value in a variable

    magneticElement.addEventListener('mousemove', handleMouseMove);
    magneticElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Clean up event listeners when component unmounts
      magneticElement.removeEventListener('mousemove', handleMouseMove);
      magneticElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [children]);

  return React.cloneElement(children, { ref: magnetic });
}
