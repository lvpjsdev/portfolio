'use client';

import { HTMLProps, useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  infinite?: boolean;
}

export const Typewriter = ({
  text,
  delay = 500,
  infinite = false,
  ...props
}: TypewriterProps & HTMLProps<HTMLSpanElement>) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setIndex(0);
      }, delay * 2);
    }

    return () => clearTimeout(timeout);
  }, [index, text, delay, infinite]);

  return <span {...props}>{currentText}</span>;
};
