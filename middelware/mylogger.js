const date = new Date();
const day = date.getDay();
const hour = date.getHours();

const myLogger = function (req, res, next) {
  if (hour > 8 && hour < 17 && day > 0 && day < 5) {
    console.log("logeer");
    next();
  } else {
    res.send("closed");
  }
};
module.exports = myLogger;
