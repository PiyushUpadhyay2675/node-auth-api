const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first post",
      description: "random data you shouldn't mess with",
    },
  });
});

module.exports = router;
