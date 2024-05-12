const test = ["name", "code", "surname", "lucas"];
let final = "";
for (const column of test) {
  final = `${final}, ${column}`;
}

console.log(final.substring(2, 999));
