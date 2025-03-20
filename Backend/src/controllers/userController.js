import { fetchUsers } from "../services/userService.js";

export const getTopUsers = async (req, res) => {
  try {
    const topUsers = await fetchUsers();
    res.json(topUsers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching top users", error: error.message });
  }
};
