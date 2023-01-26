const checkLanguage = (req, res, next) => {
  const language = req.headers["accept-language"];
  console.log(language);

  if (!language.includes("en")) {
    return res.send("Sorry, cannot pass!");
  }
  next();
};

module.exports = checkLanguage;
