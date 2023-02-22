import React from 'react';

interface TagProps {
  text: string;
  start?: boolean;
  color: 'gold' | 'orange' | 'purple';
  styles?: string;
  size?: 'sm' | 'lg' | 'xl' | '2xl';
}

const Tag: React.FC<TagProps> = ({ size, styles, text, start = true, color = 'gold' }) => {
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

  const getSize = () => {
    switch (size) {
      case ('sm'):
        return 'text-sm';
      case ('lg'):
        return 'text-lg';
      case ('xl'):
        return 'text-xl';
      default:
        return 'text-base';
    }
  }

  return (
    <div className={`${getColor()} ${getSize()} ${styles}`}>
      <p>{`${start ? `<${text}>` : `</${text}>`}`}</p>
    </div>
  )
}

export default Tag;