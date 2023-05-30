const express = require("express");
const customerController = require('../controllers/customerController')
 
const router = express.Router();

//GET all customers
router.get("/",customerController.getAllCustomers);

//GET customer
router.get("/:id",customerController.getCustomer);

//Create single customer
router.post("/", customerController.createCustomer);

//DELETE single customer
router.delete("/:id", customerController.deleteCustomer);

//UPDATE single customer
router.patch("/:id ", customerController.updateCustomer);

module.exports = router;
