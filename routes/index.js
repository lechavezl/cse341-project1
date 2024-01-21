const router = require('express').Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-output.json");

// Swagger routes
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Main route response
router.get("/", (req, res) => {
    //#swagger.tags=["Luis Chavez Project 1"]
    res.send("Luis Chavez Project 1");
});

// Route to use all contacts routes
router.use("/contacts", require("./routerContacts"))

/*
* DOCUMENTATION URL
*/
// routes.use(
//     '/',
//     (docData = (req, res) => {
//       let docData = {
//         documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
//       };
//       res.send(docData);
//     })
//   );

module.exports = router;