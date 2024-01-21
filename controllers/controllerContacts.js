const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;


const getAllContacts = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const result = await mongodb.getDatabase().db().collection("users").find();
    result.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(users);
    });
};

const getSingleContacts = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("users").find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(users[0]);
    });
};

const createContact = async (req, res) => {
    //#swagger.tags=["Contacts"]

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await mongodb.getDatabase().db().collection("users").insertOne(contact);

    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "Some error ocurred while updating the user.")
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags=["Contacts"]

    const contactId = new ObjectId(req.params.id);

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await mongodb.getDatabase().db().collection("users").replaceOne({ _id: contactId }, contact);

    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "Some error ocurred while updating the user.");
    }
};

const deleteContact = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const contactId = new ObjectId(req.params.id);
    
    const response = await mongodb.getDatabase().db().collection("users").deleteOne({ _id: contactId });

    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "Some error ocurred while deleting the user.");
    }
}


module.exports = {getAllContacts, getSingleContacts, createContact, updateContact, deleteContact};