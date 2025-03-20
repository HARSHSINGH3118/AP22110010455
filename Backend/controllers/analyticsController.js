// controllers/analyticsController.js
const { getAllUsers, getAllPosts } = require("../services/dataService");

/**
 * getTopUsersByCommentCount
 * Finds users with the highest total number of comments across their posts.
 */
async function getTopUsersByCommentCount(req, res, next) {
  try {
    const users = await getAllUsers();

    // Each user has an array of posts, each post has an array of comments
    const userCommentCounts = users.map((user) => {
      let totalComments = 0;
      if (user.posts) {
        user.posts.forEach((post) => {
          if (post.comments) {
            totalComments += post.comments.length;
          }
        });
      }
      return {
        userId: user.id,
        userName: user.name,
        totalComments,
      };
    });

    // Sort descending by totalComments and return top 5
    userCommentCounts.sort((a, b) => b.totalComments - a.totalComments);
    const topUsers = userCommentCounts.slice(0, 5);

    return res.json({ topUsers });
  } catch (err) {
    next(err);
  }
}

/**
 * getTopPostsByCommentCount
 * Finds posts with the highest number of comments.
 */
async function getTopPostsByCommentCount(req, res, next) {
  try {
    const posts = await getAllPosts();

    // Each post has an array of comments
    const postCommentCounts = posts.map((post) => {
      const numComments = post.comments ? post.comments.length : 0;
      return {
        postId: post.id,
        userId: post.userid,
        content: post.content,
        numComments,
      };
    });

    // Sort descending by numComments and return top 5
    postCommentCounts.sort((a, b) => b.numComments - a.numComments);
    const topPosts = postCommentCounts.slice(0, 5);

    return res.json({ topPosts });
  } catch (err) {
    next(err);
  }
}

/**
 * refreshData
 * Forces a re-fetch of all data from the remote server.
 */
async function refreshData(req, res, next) {
  try {
    const { refreshData } = require("../services/dataService");
    await refreshData();
    return res.json({ message: "Data refreshed successfully" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getTopUsersByCommentCount,
  getTopPostsByCommentCount,
  refreshData,
};
