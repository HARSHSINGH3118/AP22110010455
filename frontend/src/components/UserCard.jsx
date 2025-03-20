import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, rank }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-4">
      <div className="flex items-center">
        <div className="relative flex-shrink-0">
          <img
            className="h-16 w-16 rounded-full object-cover border-2 border-blue-500"
            src={user.avatar}
            alt={user.name}
          />
          <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {rank}
          </div>
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="inline-flex items-center text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-0.5 px-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              {user.postCount} posts
            </span>
          </div>
        </div>
        <Link
          to={`/profile/${user.id}`}
          className="ml-2 px-3 py-1.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium whitespace-nowrap transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
