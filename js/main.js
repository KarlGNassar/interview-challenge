import { getAllUsers, getAllPosts } from "./api.js";

// Fetch All Users and Inject HTML
let users = await getAllUsers();
let usersOuptut = "";
users.forEach((user) => {
  usersOuptut += `
    <tr class="users-row" id=user-${user.id}>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.address.city}</td>
      <td>${user.company.name}</td>
    </tr>
  `;
});

const usersTableBody = document.querySelector("#users-table--body");
usersTableBody.innerHTML = usersOuptut;

// Listen to clicks on Row
const usersTable = document.querySelector("#users-table");
const usersRow = document.querySelectorAll(".users-row");
const userPostsWrapper = document.querySelector(".user-posts--wrapper");
const userPostsContainer = document.querySelector(".user-posts--container");

let targetedId = null;

usersRow.forEach((row) => {
  row.addEventListener("click", async (e) => {
    targetedId = row.id.slice(5); // In order to remove 'user' from id and get the number

    // Get Posts and Inject HTML
    let posts = await getAllPosts(targetedId);
    let postsOuptut = "";
    userPostsContainer.innerHTML = "";

    posts.forEach((post) => {
      postsOuptut += `
        <div class="card col-sm mb-5 shadow">
          <div class="card-header text-white bg-dark">
            ${post.title}
          </div>
          <div class="card-body">
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      `;
    });
    userPostsContainer.innerHTML += postsOuptut;

    userPostsWrapper.style.visibility = "visible";
    usersTable.style.visibility = "collapse";
    // Or we can add classList to both elements .active for example
  });
});

// Go Back to Main Page
const backIcon = document.querySelector("#back-icon");

backIcon.addEventListener("click", (e) => {
  userPostsWrapper.style.visibility = "collapse";
  usersTable.style.visibility = "visible";
});
