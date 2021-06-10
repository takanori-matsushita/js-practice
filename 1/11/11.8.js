const fetch = require("node-fetch");
// 11.8.1
async function loadJson(url) {
  try {
    const res = await fetch(url);
    if (res.status == 200) {
      const json = await res.json();
      return json;
    }
  } catch (e) {
    console.log(e.status);
  }
}

loadJson("https://api.ipify.org?format=json").then(console.log);

// 11.8.2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const res = await fetch(url);
  if (res.status == 200) {
    return res.json();
  } else {
    throw new HttpError(res);
  }
}

async function demoGithubUser() {
  let user;
  try {
    let name = "iliakan";
    user = await loadJson(`https://api.github.com/users/${name}`);
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
  console.log(`FullName: ${user.name}`);
  return user;
}

demoGithubUser();

// 11.8.3
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...ここに何を書きますか？
  // async wait() をして 10 を取得するのを待ちます
  // 覚えておいてください、"await" は使えません
  wait().then(console.log);
}

f();
