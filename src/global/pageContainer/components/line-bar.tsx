import React, { forwardRef, MutableRefObject, useEffect, useState } from 'react';

interface Props {

}

const LineBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [lines, setLines] = useState<number[]>(Array.from({ length: 100 }).map((_, i) => i + 1));
  const [height, setHeight] = useState(450);


  useEffect(() => {
    if (!(ref as MutableRefObject<HTMLDivElement>).current) return;

    setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
    window.addEventListener('resize', () => {
      setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
    })
    return () => {
      window.removeEventListener('resize', () => {
        setHeight((ref as MutableRefObject<HTMLDivElement>).current.scrollHeight);
      })
    }
  }, []);

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