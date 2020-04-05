var bcrypt = require("bcryptjs");

var givenHash = "$2a$04$6WGGa41BWeq7wipJ7QnamuF525JojuEL1NAPCEaa/sQTFETpqeVC.";

console.log(givenHash.length);

for (i = 0; i < 100000; i++) {
  var flag = bcrypt.compareSync("0" + i, givenHash);
  console.log(i + " = " + flag);
  if (flag) {
    break;
  }
}
