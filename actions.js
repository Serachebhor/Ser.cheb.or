const app = require("./scripts/app");

exports.tapped = sender => {
  app.sayHello();
}


exports.touchesBegan = (sender, location) => {
  
}
