import {useState} from 'react'
import {addCustomer,fetchCustomers} from '../apis/customers'

const CustomerForm = ()=>{
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [error, setError] = useState('')
    const [emptyFields, setEmptyFields]  = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const customer = {name , address ,mobileNumber }
        addCustomer(customer,setError,setEmptyFields,setName,setAddress,setMobileNumber)
        .then(()=>fetchCustomers());

    }
    return (<form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Customer</h3>
        <label>Customer Name</label>
        <input 
        type='text'
        onChange={(e)=>setName(e.target.value)} 
        value={name}
        className={emptyFields?.indexOf["name"]  > -1 ? 'error' : ''}
        />
        <label>Customer Address</label>
        <input 
        type='text'
        onChange={(e)=>setAddress(e.target.value)} 
        value={address}
        className={emptyFields?.indexOf["address"]  > -1 ? 'error' : ''}
        />
        <label>Customer Mobile Number</label>
        <input 
        type='text'
        onChange={(e)=>setMobileNumber(e.target.value)} 
        value={mobileNumber}
        className={emptyFields?.indexOf["mobileNumber"] > -1 ? 'error' : ''}
        />
        <button>Add Customer</button>
        {error && <div className='error'>{error} : {emptyFields.map((field)=><span> {field} </span>)}</div>}
    </form>)
}
export default CustomerForm