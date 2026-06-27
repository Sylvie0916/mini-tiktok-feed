let posts = [
  { text: "Welcome to my feed 🚀", likes: 2 },
  { text: "Coding like TikTok engineer 💻", likes: 5 }
];

function renderFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <p>${post.text}</p>
      <button onclick="likePost(${index})">❤️ ${post.likes}</button>
    `;

    feed.appendChild(div);
  });
}

function createPost() {
  const input = document.getElementById("postInput");

  if (!input.value.trim()) return;

  posts.unshift({
    text: input.value,
    likes: 0
  });

  input.value = "";
  renderFeed();
}

function likePost(i) {
  posts[i].likes++;
  renderFeed();
}

renderFeed();