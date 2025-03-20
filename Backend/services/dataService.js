// services/dataService.js
const axios = require("axios");
const { BASE_URL } = require("../config");
const { getCache, setCache, clearCache } = require("./cache");

/**
 * fetchAllData
 * Fetches users, then for each user fetches posts, and for each post fetches comments.
 */
async function fetchAllData() {
  // 1) Fetch all users
  const usersRes = await axios.get(`${BASE_URL}/users`);
  const users = usersRes.data.users || [];

  const allPosts = [];
  const allComments = [];

  // 2) For each user, fetch their posts
  for (const user of users) {
    const postsRes = await axios.get(`${BASE_URL}/users/${user.id}/posts`);
    const userPosts = postsRes.data.posts || [];
    user.posts = userPosts; // Attach posts to the user

    // Add these posts to our global posts array
    allPosts.push(...userPosts);
  }

  // 3) For each post, fetch its comments
  for (const post of allPosts) {
    const commentsRes = await axios.get(
      `${BASE_URL}/posts/${post.id}/comments`
    );
    const postComments = commentsRes.data.comments || [];
    post.comments = postComments; // Attach comments to the post
    allComments.push(...postComments);
  }

  // Store data in cache
  setCache("users", users);
  setCache("posts", allPosts);
  setCache("comments", allComments);

  return { users, posts: allPosts, comments: allComments };
}

/**
 * getAllUsers
 * Returns cached users. If not cached, fetch from server.
 */
async function getAllUsers() {
  let users = getCache("users");
  if (!users) {
    const data = await fetchAllData();
    users = data.users;
  }
  return users;
}

/**
 * getAllPosts
 * Returns cached posts. If not cached, fetch from server.
 */
async function getAllPosts() {
  let posts = getCache("posts");
  if (!posts) {
    const data = await fetchAllData();
    posts = data.posts;
  }
  return posts;
}

/**
 * getAllComments
 * Returns cached comments. If not cached, fetch from server.
 */
async function getAllComments() {
  let comments = getCache("comments");
  if (!comments) {
    const data = await fetchAllData();
    comments = data.comments;
  }
  return comments;
}

/**
 * refreshData
 * Clears the cache and forces a fresh fetch from the server.
 */
async function refreshData() {
  clearCache();
  await fetchAllData();
}

module.exports = {
  getAllUsers,
  getAllPosts,
  getAllComments,
  refreshData,
};
