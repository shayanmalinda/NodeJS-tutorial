var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a == "number" && typeof b == "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 2500);
  });
};

//METHOD 1
asyncAdd(5, 7).then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log(error);
  }
);

//METHOD 2
asyncAdd("5", 7)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
