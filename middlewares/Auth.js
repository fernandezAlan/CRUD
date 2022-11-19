const getAuth = (req, res, next) => {
  if (req.body.auth) next();
  else {
    res.sendStatus(401);
  }
};

module.exports = getAuth;
