const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Luis Chavez Project 1 part 1");
});

router.use("/contacts", require("./routerContacts"))

module.exports = router;