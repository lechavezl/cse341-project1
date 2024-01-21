const express = require('express');
const router = express.Router();
const controllerUsers = require('../controllers/controllerContacts');


// Route to get all contacts
router.get("/", controllerUsers.getAllContacts);

// Route to get a single contact
router.get("/:id", controllerUsers.getSingleContacts);

// Route to the create contact
router.post("/", controllerUsers.createContact);

// Route to update a contact
router.put("/:id", controllerUsers.updateContact);

// Route to delete a contact
router.delete("/:id", controllerUsers.deleteContact);

module.exports = router;