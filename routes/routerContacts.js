const express = require('express');
const router = express.Router();
const controllerUsers = require('../controllers/controllerContacts');

router.get("/", controllerUsers.getAllContacts);

router.get("/:id", controllerUsers.getSingleContacts);

module.exports = router;