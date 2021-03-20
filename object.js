var pet1 = { type: "スノーホワイトハムスター", name: "キラ" };
var pet2 = { type: "スノーホワイトハムスター", name: "キラ" };
var pet3 = { type: "スノーホワイトハムスター", name: "キラ" };

Object.preventExtensions(pet1);
Object.seal(pet2);
Object.freeze(pet3);

pet1.name = "山田きら";
delete pet1.type;
pet1.weight = 42;

pet2.name = "山田きら";
delete pet2.type;
pet2.weight = 42;

pet3.name = "山田きら";
delete pet3.type;
pet3.weight = 42;

console.log(pet1);
console.log(pet2);
console.log(pet3);
