const Customer = require("../models/customerModel");
const mongoose = require("mongoose");
const createCustomer = async (req, res) => {
  const { name, address, mobileNumber } = req.body;
const emptyFields = []

if(!name){
  emptyFields.push("name")
}
if(!address){
  emptyFields.push("address")
}
if(!mobileNumber){
  emptyFields.push("mobileNumber")
}
if(emptyFields.length > 0 ) return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
  try {
    const customer = await Customer.create({ name, address, mobileNumber });
     res.status(200).json(customer);
  } catch (error) {
     res.status(400).json({ error: error.message });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCustomer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Customer" });
  }
  try {
    const customer = await Customer.findById(id);

    if (!customer) {
      return res.status(404).json({ error: "customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Customer" });
  }
  const customer = await Customer.findOneAndDelete({ _id: id });

  if (!customer) {
    return res.status(404).json({ error: "customer not found" });
  }

  res.status(200).json(customer);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Customer" });
  }

  const customer = await Customer.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!customer) {
    return res.status(404).json({ error: "customer not found" });
  }

  res.status(200).json(customer);
};

module.exports = {
  createCustomer,
  getAllCustomers,
  deleteCustomer,
  updateCustomer,
  getCustomer,
};
