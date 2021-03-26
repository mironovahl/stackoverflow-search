import React from 'react';
import { TOwner } from 'src/types';

interface IAuthorProps {
  author: TOwner;
  handleClick?: (userId: number) => void;
}
export const Author = ({ author, handleClick }: IAuthorProps) => {
  return (
    <div className="author" onClick={() => handleClick?.(author.userId)}>
      <img className="author_avatar" src={author.profileImage} alt="" />
      <p className="author_name">{author.displayName}</p>
    </div>
  );
};
