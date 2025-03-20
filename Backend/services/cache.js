// services/cache.js

// Simple in-memory cache object
const cacheStore = {};

/**
 * getCache
 * Retrieves a value from the cache by key.
 */
function getCache(key) {
  return cacheStore[key];
}

/**
 * setCache
 * Stores a value in the cache under the given key.
 */
function setCache(key, value) {
  cacheStore[key] = value;
}

/**
 * clearCache
 * Clears all entries from the cache.
 */
function clearCache() {
  for (const key in cacheStore) {
    delete cacheStore[key];
  }
}

module.exports = {
  getCache,
  setCache,
  clearCache,
};
