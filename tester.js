let posts = [
  { text: "Welcome to Mini TikTok 🚀", likes: 2 },
  { text: "Second post 💻", likes: 5 }
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

  document.getElementById("postCount").innerText = posts.length;
}

function createPost() {
  const input = document.getElementById("postInput");
  if (!input.value.trim()) return;

  posts.unshift({ text: input.value, likes: 0 });
  input.value = "";
  renderFeed();
}

function likePost(i) {
  posts[i].likes++;
  renderFeed();
}

/* 🔥 TAB SYSTEM */
function showPage(page) {
  document.getElementById("feedPage").classList.add("hidden");
  document.getElementById("profilePage").classList.add("hidden");

  if (page === "feed") {
    document.getElementById("feedPage").classList.remove("hidden");
  }

  if (page === "profile") {
    document.getElementById("profilePage").classList.remove("hidden");
  }
}

renderFeed();
