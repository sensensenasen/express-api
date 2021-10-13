const express = require("express");
const router = express.Router();
const User = require("../models/User");

//GET ALL USER
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIED USER
router.get("/:username", async (req, res) => {
  try {
    const specifiedUser = await User.findOne({ username: req.params.username });
    res.json(specifiedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT USER
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE User
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE User
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          username: req.body.username,
          fullname: req.body.fullname,
          email: req.body.email,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
