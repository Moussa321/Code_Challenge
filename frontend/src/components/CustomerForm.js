import {useState} from 'react'
import {addCustomer} from '../apis/customers'

const CustomerForm = ()=>{
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const customer = {name , address ,mobileNumber }
        addCustomer(customer,setError,setName,setAddress,setMobileNumber)

    }
    return (<form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Customer</h3>
        <label>Customer Name</label>
        <input 
        type='text'
        onChange={(e)=>setName(e.target.value)} 
        value={name}
        />
        <label>Customer Address</label>
        <input 
        type='text'
        onChange={(e)=>setAddress(e.target.value)} 
        value={address}
        />
        <label>Customer Mobile Number</label>
        <input 
        type='text'
        onChange={(e)=>setMobileNumber(e.target.value)} 
        value={mobileNumber}
        />
        <button>Add Customer</button>
        {error && <div className='error'>{error}</div>}
    </form>)
}
export default CustomerForm