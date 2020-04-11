const utils = require("./utils");

it("should add two numbers", () => {
  var results = utils.add(33, 11);

  if (results !== 44) {
    throw new Error(`Expected 44, but got ${results}`);
  }
});
