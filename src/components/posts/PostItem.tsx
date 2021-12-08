import React, { FC } from 'react';
import { IPost } from '../../models';
import cl from './PostItem.module.css';


interface PostItemProps {
  post: IPost;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className={cl.post}>
      <div className={cl.postContent}>
        <span className={cl.postId}>{post.id}.</span>
        <span className={cl.postTitle}>{post.title}</span>
        <div className={cl.postBody}>{post.body}</div>
      </div>
      <button className={cl.myBtn}>Delete post</button>
    </div>
  );
};
