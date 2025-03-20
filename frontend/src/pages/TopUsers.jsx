import React, { useState } from "react";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";
import { mockUsers } from "../utils/mockData";

const TopUsers = () => {
  const [sortBy, setSortBy] = useState("posts");
  const [filterValue, setFilterValue] = useState("");

  const sortedUsers = [...mockUsers].sort((a, b) => {
    if (sortBy === "posts") {
      return b.postCount - a.postCount;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Top Users
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Users with the highest contribution
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 pr-3"
                placeholder="Search users..."
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </div>

            <select
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto py-2.5 px-3"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="posts">Sort by Posts</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {filteredUsers.length === 0 ? (
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
              No users found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredUsers.map((user, index) => (
              <UserCard key={user.id} user={user} rank={index + 1} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:outline-none">
            Load More Users
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TopUsers;
