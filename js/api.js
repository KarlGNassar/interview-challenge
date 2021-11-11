/**
 * This functions calls the API to get all users
 * @returns {Array} Returns users array
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
 * @param {Number} userId
 * @returns {Array} Return posts array for that specific User
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
