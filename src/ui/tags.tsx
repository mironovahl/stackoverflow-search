import React from 'react';
import { TSearchBy } from 'src/types';

interface ITagsProps {
  tags: string[];
  handleClick: (type: TSearchBy, value: number | string) => void;
}

export const Tags = ({ tags, handleClick }: ITagsProps) => {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span key={tag} onClick={() => handleClick('tag', tag)} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};
