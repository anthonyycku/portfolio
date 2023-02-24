import React, { FC } from 'react';
import Tag, { TagProps } from "../../../global/tags/tags";

interface TagLineProps extends TagProps {
  children: React.ReactNode;
  lineStyles?: string;
  inline?: boolean;
}

const TagLine: FC<TagLineProps> = (
  {
    children,
    lineStyles = '',
    inline = false,
    text,
    styles,
    color = 'gold',
    size = 'base'
  }
) => {
  return (
    <div className={`${lineStyles} ${inline ? 'flex space-x-2' : 'flex-col'} text-${size}`}>
      <Tag text={text} start styles={styles} color={color} size={size}/>
      <div className={`${!inline ? 'pl-4' : ''}`}>
        {children}
      </div>
      <Tag text={text} start={false} styles={styles} color={color} size={size}/>
    </div>
  )
};

export default TagLine;