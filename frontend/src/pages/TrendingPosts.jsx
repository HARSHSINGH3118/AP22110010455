import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { mockPosts } from "../utils/mockData";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = [
    "all",
    "technology",
    "nature",
    "food",
    "travel",
    "pets",
    "ocean",
    "animals",
  ];

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      let filteredPosts = [...mockPosts];

      if (timeFilter === "today") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        filteredPosts = filteredPosts.filter(
          (post) => new Date(post.timestamp) >= today
        );
      } else if (timeFilter === "week") {
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        filteredPosts = filteredPosts.filter(
          (post) => new Date(post.timestamp) >= lastWeek
        );
      }

      if (categoryFilter !== "all") {
        filteredPosts = filteredPosts.filter((post) =>
          post.content.toLowerCase().includes(categoryFilter.toLowerCase())
        );
      }

      const sortedPosts = filteredPosts.sort(
        (a, b) => b.commentCount - a.commentCount
      );

      setPosts(sortedPosts);
      setIsLoading(false);
    }, 800);
  }, [timeFilter, categoryFilter]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trending Posts
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Discover the most popular content
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto py-2.5 px-3"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
            </select>

            <select
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto py-2.5 px-3"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setCategoryFilter(category)}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
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
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <svg
              className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              No posts found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your filter criteria
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:outline-none">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TrendingPosts;
