const checkTime = (req, res, next) => {
  const time = new Date().getHours();
  console.log(time);
  if (time < 12) {
    return res.send("Listen to the lecture, do not read posts now!");
  }
  next();
};

module.exports = checkTime;
