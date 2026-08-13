const githubApi = "https://api.github.com/users/suparthghimire";

fetch(githubApi)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    renderUI(data);
  })
  .catch((err) => {
    console.log(error);
  });

// const tempData = {
//   login: "suparthghimire",
//   id: 42566509,
//   node_id: "MDQ6VXNlcjQyNTY2NTA5",
//   avatar_url: "https://avatars.githubusercontent.com/u/42566509?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/suparthghimire",
//   html_url: "https://github.com/suparthghimire",
//   followers_url: "https://api.github.com/users/suparthghimire/followers",
//   following_url:
//     "https://api.github.com/users/suparthghimire/following{/other_user}",
//   gists_url: "https://api.github.com/users/suparthghimire/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/suparthghimire/starred{/owner}{/repo}",
//   subscriptions_url:
//     "https://api.github.com/users/suparthghimire/subscriptions",
//   organizations_url: "https://api.github.com/users/suparthghimire/orgs",
//   repos_url: "https://api.github.com/users/suparthghimire/repos",
//   events_url: "https://api.github.com/users/suparthghimire/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/suparthghimire/received_events",
//   type: "User",
//   user_view_type: "public",
//   site_admin: false,
//   name: "Suparth Narayan Ghimire",
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: "Web Designer\r\nNode JS\r\nLaravel\r\nJavaScript\r\nHTML\r\nCSS",
//   twitter_username: null,
//   public_repos: 93,
//   public_gists: 3,
//   followers: 35,
//   following: 9,
//   created_at: "2018-08-21T06:25:40Z",
//   updated_at: "2026-08-03T11:54:13Z",
// };

function renderUI(data) {
  const body = document.querySelector("body");

  const section = document.createElement("section");

  const name = document.createElement("h1");
  name.textContent = data.name;

  const bio = document.createElement("p");
  bio.textContent = data.bio;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${data.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${data.following}`;

  const avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  avatar.alt = `${data.name}'s avatar`;

  section.appendChild(avatar);
  section.appendChild(name);
  section.appendChild(bio);
  section.appendChild(followers);
  section.appendChild(following);

  body.appendChild(section);
}

// renderUI(tempData);
