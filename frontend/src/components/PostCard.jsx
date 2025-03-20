import React, { useState } from "react";
import { mockComments } from "../utils/mockData";

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const postComments = mockComments.filter(
    (comment) => comment.postId === post.id
  );

  if (postComments.length === 0) {
    const randomComments = [
      { user: "Alice Johnson", content: "This is amazing!" },
      { user: "Bob Smith", content: "I love this post!" },
      { user: "Charlie Brown", content: "Great shot!" },
      { user: "David Miller", content: "Interesting perspective!" },
      { user: "Emma Wilson", content: "Thanks for sharing!" },
    ];

    postComments.push(
      ...randomComments.slice(0, Math.floor(Math.random() * 5) + 1)
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-4 overflow-hidden">
      <div className="flex items-center p-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
            src={post.userAvatar}
            alt={post.user}
          />
        </div>
        <div className="ml-3 flex-grow">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {post.user}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(post.timestamp)}
          </p>
        </div>
        <div>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4 pb-3">
        <p className="text-gray-800 dark:text-gray-200 mb-2">{post.content}</p>
      </div>

      {post.image && (
        <div className="aspect-w-16 aspect-h-12 bg-gray-100 dark:bg-gray-700">
          <img
            className="w-full h-full object-cover"
            src={post.image}
            alt="Post content"
          />
        </div>
      )}

      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className={`flex items-center space-x-1 ${
                liked
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500"
              }`}
              onClick={() => {
                setLiked(!liked);
                setLikeCount(liked ? likeCount - 1 : likeCount + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium">{likeCount}</span>
            </button>

            <button
              className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
              onClick={() => setExpanded(!expanded)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium">{post.commentCount}</span>
            </button>

            <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>

          <button
            className={`${
              bookmarked
                ? "text-blue-500"
                : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
            }`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          {postComments.length > 0 ? (
            <div className="space-y-3">
              {postComments.map((comment, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-300">
                        {comment.user.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {comment.user}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm py-2">
              No comments yet
            </p>
          )}

          <div className="mt-4 flex items-center">
            <div className="flex-grow border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-700 pl-4 pr-2 py-1">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-300"
              />
            </div>
            <button className="ml-2 text-blue-500 font-medium text-sm">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
