import React from 'react';

interface TagProps {
  text: string;
  start?: boolean;
  color: 'gold' | 'orange' | 'purple';
}

const Tag: React.FC<TagProps> = ({ text, start = true, color = 'gold' }) => {
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
    <div className={`${getColor()}`}>
      {`${start ? `<${text}>` : `</${text}>`}`}
    </div>
  )
}

export default Tag;