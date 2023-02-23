import React from 'react';

export interface TagProps {
  text: string;
  start?: boolean;
  color?: 'gold' | 'orange' | 'purple';
  styles?: string;
  size?: 'sm' | 'lg' | 'xl' | '2xl' | 'base';
}

const Tag: React.FC<TagProps> = (
  {
    size = 'base',
    styles,
    text,
    start = true,
    color = 'gold'
  }) => {

  const getColor = () => {
    switch (color) {
      case ('orange'):
        return 'text-amber-600';
      case ('purple'):
        return 'text-purple-500';
      default:
        return 'text-yellow-400';
    }
  }

  return (
    <div className={`${getColor()} text-${size} ${styles}`}>
      <p>{`${start ? `<${text}>` : `</${text}>`}`}</p>
    </div>
  )
}

export default Tag;