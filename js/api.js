/**
 * This functions calls the API to get all users
 * @async
 * @returns {Promise<Array>} Returns users array
 */
export const getAllUsers = async () => {
  const allUsersEndpoint = "https://jsonplaceholder.typicode.com/users/";

  try {
    const response = await fetch(allUsersEndpoint);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * This functions calls the API to get all posts
 * @async
 * @param {Number} userId
 * @returns {Promise<Array>} Return posts array for that specific User
 */
export const getAllPosts = async (userId) => {
  const allPostsOfUserEndpoint = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  try {
    const response = await fetch(allPostsOfUserEndpoint);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
