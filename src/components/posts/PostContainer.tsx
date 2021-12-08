import React from 'react';
import { PostItem } from './PostItem';
import { postAPI } from './../../services/PostService';

export const PostContainer = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(30)
  return (
    <div>
      <h3 className="signature">Список постов:</h3>
      {isLoading && <h4>Loadding...</h4>}
      {error && <h3>Error... Произошла ошибка при загрузке постов. </h3>}
      {posts && posts.map(post =>
        <PostItem key={post.id} post={post} />
      )}
    </div>
  );
};