const fetch = require("node-fetch");
// 11.5.1
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
  "/",
];

Promise.all(urls.map((url) => fetch(url).catch((err) => err)))
  // 各レスポンスに対し、そのステータスを表示
  .then((responses) => {
    // (*)
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  });

// 11.5.2
let urls2 = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
  "/",
];

// フェッチリクエストを作成
Promise.all(urls2.map((url) => fetch(url).catch((err) => err)))
  // 各レスポンスを response.json() にマップする
  .then((responses) =>
    Promise.all(responses.map((r) => (r instanceof Error ? r : r.json())))
  )
  .catch((err) => err)
  // 各ユーザ名を表示
  .then((users) => {
    // (*)
    for (let user of users) {
      console.log(user.name);
    }
  });
