import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 60 * 5 }); // Cache data for 5 minutes

export const getCachedData = (key) => cache.get(key);
export const setCachedData = (key, value) => cache.set(key, value);
