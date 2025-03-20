import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { mockPosts } from "../utils/mockData";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sortedPosts = [...mockPosts].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    setPosts(sortedPosts);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPost = {
        id: Math.floor(Math.random() * 1000) + 500,
        userId: Math.floor(Math.random() * 5) + 1,
        user: mockPosts[Math.floor(Math.random() * mockPosts.length)].user,
        userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        )}`,
        content: `New post about ${
          ["technology", "nature", "food", "travel", "pets"][
            Math.floor(Math.random() * 5)
          ]
        }`,
        image: `https://source.unsplash.com/random/800x600?${
          ["technology", "nature", "food", "travel", "pets"][
            Math.floor(Math.random() * 5)
          ]
        }&sig=${Math.random()}`,
        commentCount: Math.floor(Math.random() * 10),
        timestamp: new Date().toISOString(),
      };

      setPosts((prev) => [newPost, ...prev]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Feed
          </h1>
          <div className="flex items-center">
            <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          Latest posts, refreshed in real-time
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center text-blue-700 dark:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              Live updates enabled: New posts will appear at the top
              automatically.
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm animate-pulse p-4"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
                  </div>
                </div>
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Feed;
