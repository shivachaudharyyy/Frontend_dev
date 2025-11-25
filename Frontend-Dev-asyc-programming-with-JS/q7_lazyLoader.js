"use strict";

function loadProfile() {
  return new Promise((res, rej) =>
    setTimeout(() => Math.random() < 0.3 ? rej("Profile error") : res("Profile Loaded"), 2000)
  );
}

function loadPosts() {
  return new Promise((res, rej) =>
    setTimeout(() => Math.random() < 0.3 ? rej("Posts error") : res("Posts Loaded"), 1500)
  );
}

function loadMessages() {
  return new Promise((res, rej) =>
    setTimeout(() => Math.random() < 0.3 ? rej("Messages error") : res("Messages Loaded"), 1000)
  );
}

async function loadDashboard() {
  const start = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  console.log(results);

  const end = Date.now();
  console.log(`Total time: ${((end - start) / 1000).toFixed(2)}s`);
}

loadDashboard();
