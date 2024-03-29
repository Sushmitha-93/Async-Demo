console.log("Before");

// Promise-Based approach
/*
getUser(1)
  .then(user => getRepo(user.gitHubUsername))
  .then(repos => getCommits(repos))
  .then(commits => console.log("Commits", commits))
  .catch(err => console.log("Error", err.message));
*/

// Async and Await approach
async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepo(user.gitHubUsername);
  const commits = await getCommits(repos);
  console.log(commits);
}
displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database..");
      resolve({ id: id, gitHubUsername: "sush" });
    }, 2000);
  });
}

function getRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting repositories..");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting commits..");
      resolve([3, 4, 1]);
    }, 1000);
  });
}
