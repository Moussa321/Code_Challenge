const Customer = require('../models/customerModel')

const createCustomer = async (req,res) => {

    const {name , address , mobileNumber } = req.body
    try{
    const customer = await Customer.create({name , address , mobileNumber })
    res.status(200).json(customer)
    
    }catch (error){
    res.status(400).json({ error: error.message })
    }

}

const getAllCustomers = async (req,res) => {
    try{
        const customers = await Customer.find({})
        res.status(200).json(customers)
        
        }catch (error){
        res.status(400).json({ error: error.message })
    
    }

}

const getCustomer = async (req,res)=>{
const { id } = req.params
try{

const customer = await Customer.findById(id)

if(!customer){
    return res.status(404).json({error: 'customer not found'})
}
res.status(200).json(customer)

}catch(error){
res.status(400).json({error : error.message})
}
}

const deleteCustomer = async (req,res) => {
    
}

const updateCustomer = async (req,res) => {
    
}


module.exports = {
    createCustomer,
    getAllCustomers,
    deleteCustomer,
    updateCustomer,
    getCustomer
}