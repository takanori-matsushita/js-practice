// 5.12.1
let user = {
  name: "John Smith",
  age: 35,
};

let json = JSON.parse(JSON.stringify(user));
console.log(json);

// 5.12.2
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// 循環参照
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(meetup);
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
