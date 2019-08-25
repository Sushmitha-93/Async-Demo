console.log("Before");
getUser(1, user => {
  console.log(user);
  getRepo(user.gitHubUsername, repos => {
    console.log(repos);
    getCommits(repos, commits => {
      console.log(commits);
      //This is called callback hell - because it has nested callbacks
    });
  });
});

console.log("After");

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
