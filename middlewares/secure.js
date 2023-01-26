const secure = (req, res, next) => {
  //   console.log(req.query);
  //   console.log("middleware secure");
  const { token, pizza, gender } = req.query;
  console.log(req.query);
  //   console.log(token);
  if (!token)
    //erweitert:  if (token !== "123")
    return res.status(403).send("No token found, can not pass.");
  next();
};

module.exports = secure;
