import {
  fetchPopularPosts,
  fetchLatestPosts,
} from "../services/postService.js";

export const getTopOrLatestPosts = async (req, res) => {
  try {
    const type = req.query.type;
    if (type === "popular") {
      const posts = await fetchPopularPosts();
      res.json(posts);
    } else if (type === "latest") {
      const posts = await fetchLatestPosts();
      res.json(posts);
    } else {
      res
        .status(400)
        .json({
          message: 'Invalid type parameter. Use "latest" or "popular".',
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
};
