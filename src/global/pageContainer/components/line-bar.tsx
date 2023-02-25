import React, { forwardRef, MutableRefObject, useLayoutEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

interface Props {
}

const LineBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [lines, setLines] = useState<number[]>(Array.from({ length: 250 }).map((_, i) => i + 1));
  const [height, setHeight] = useState(450);
  const location = useLocation();


  useLayoutEffect(() => {
    if (!(ref as MutableRefObject<HTMLDivElement>).current) return;
    setTimeout(() => {
      setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
    }, 100);
    window.addEventListener('resize', () => {
      setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
    })
    return () => {
      window.removeEventListener('resize', () => {
        setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
      })
    }
  }, [location]);

  return (
    <div
      style={{ height: `${height}px` }}
      className={`flex flex-col w-8 items-end bg-navColor pr-1 font-light pt-2 absolute overflow-hidden`}
    >
      {lines.map(line => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
});

export default LineBar;