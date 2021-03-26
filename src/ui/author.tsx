import React from 'react';
import { TOwner } from 'src/types';

interface IAuthorProps {
  author: TOwner;
  handleClick?: (userId: number) => void;
}
export const Author = ({ author, handleClick }: IAuthorProps) => {
  return (
    <div className="author" onClick={() => handleClick?.(author.user_id)}>
      <img className="author_avatar" src={author.profile_image} alt="" />
      <p className="author_name">{author.display_name}</p>
    </div>
  );
};
