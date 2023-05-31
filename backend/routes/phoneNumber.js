const express = require("express");
const phoneNumberService = require('../services/phoneNumberService')
 
const router = express.Router();

//validate phone Number
router.get("/validate", phoneNumberService.validatePhoneNumber);

module.exports = router;
