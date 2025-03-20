import axios from "axios";
import { BASE_URL, USERS_API, POSTS_API } from "../config/apiConfig.js";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${USERS_API}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc1ODA3LCJpYXQiOjE3NDI0NzU1MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI1OThmZmZkLWYzYzAtNDBmMC1iMGZlLTc3ZTMwMDgyZGEyYyIsInN1YiI6ImtodXNoaV9tYWxob3RyYUBzcm1hcC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJTUk0gVW5pdmVyc2l0eSBBUCIsImNsaWVudElEIjoiMjU5OGZmZmQtZjNjMC00MGYwLWIwZmUtNzdlMzAwODJkYTJjIiwiY2xpZW50U2VjcmV0IjoidUZoeE9hQmdaV3JrTG9qdiIsIm93bmVyTmFtZSI6IktodXNoaSBNYWxob3RyYSIsIm93bmVyRW1haWwiOiJraHVzaGlfbWFsaG90cmFAc3JtYXAuZWR1LmluIiwicm9sbE5vIjoiQVAyMjExMDAxMDQ1MCJ9.pFLB6PiqXI-70lM21sXKVks_qVDosnmwEgGG3UuYzM8`, // Add your API key or token
      },
    });
    return response.data.users;
  } catch (error) {
    throw new Error(
      `Failed to fetch users: ${
        error.response ? error.response.statusText : error.message
      }`
    );
  }
};
