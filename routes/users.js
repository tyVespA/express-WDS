const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  // res.send("User New Form");
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  console.log(req.body.firstName);
  res.send("Create User");
});

// router.get("/:userId", (req, res) => {
//   res.send("Get user id: " + req.params.userId);
// });

// router.put("/:userId", (req, res) => {
//   res.send("Update user id: " + req.params.userId);
// });

// router.delete("/:userId", (req, res) => {
//   res.send("Delete user id: " + req.params.userId);
// });

// If we have many methods at the same route, we can create a route with router.route("/") and chain them
router
  .route("/:userId")
  .get((req, res) => {
    res.send("Get user id: " + req.params.userId);
    console.log(req.user.name);
  })
  .put((req, res) => {
    res.send("Update user id: " + req.params.userId);
  })
  .delete((req, res) => {
    res.send("Delete user id: " + req.params.userId);
  });

const users = [{ name: "sally" }, { name: "marco" }, { name: "polly" }];
// any time i get a req where's there's a param that matches the id, this middleware f will be called
router.param("userId", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
