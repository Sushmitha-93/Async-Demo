console.log("Before");
getUser(1, getRepositories); // Call back hell resolved using Named functions

console.log("After");

function getRepositories(user) {
  getRepo(user.gitHubUsername, fetchCommits);
}

function fetchCommits(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database..");
    callback({ id: id, gitHubUsername: "sush" });
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("Getting repositories..");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("Getting commits..");
    callback([3, 4, 1]);
  }, 1000);
}
