import axios from "axios";
import {
  BASE_URL,
  USERS_API,
  POSTS_API,
  COMMENTS_API,
} from "../config/apiConfig.js";

export const fetchLatestPosts = async () => {
  const usersResponse = await axios.get(`${BASE_URL}${USERS_API}`);
  const users = usersResponse.data.users;

  let latestPosts = [];

  for (const userId in users) {
    const postsResponse = await axios.get(
      `${BASE_URL}${POSTS_API.replace(":userid", userId)}`
    );
    latestPosts.push(...postsResponse.data.posts);
  }

  latestPosts.sort((a, b) => b.id - a.id);
  return latestPosts.slice(0, 5);
};

export const fetchPopularPosts = async () => {
  const usersResponse = await axios.get(`${BASE_URL}${USERS_API}`);
  const users = usersResponse.data.users;

  let postCommentCounts = [];

  for (const userId in users) {
    const postsResponse = await axios.get(
      `${BASE_URL}${POSTS_API.replace(":userid", userId)}`
    );

    for (const post of postsResponse.data.posts) {
      const commentsResponse = await axios.get(
        `${BASE_URL}${COMMENTS_API.replace(":postid", post.id)}`
      );
      postCommentCounts.push({
        ...post,
        commentCount: commentsResponse.data.comments.length,
      });
    }
  }

  postCommentCounts.sort((a, b) => b.commentCount - a.commentCount);
  return postCommentCounts.filter(
    (post) => post.commentCount === postCommentCounts[0].commentCount
  );
};
