import {useState} from 'react'
import {addCustomer,fetchCustomers,updateCustomer} from '../apis/customers'

const CustomerForm = (props)=>{
    const [name, setName] = useState(props.update ? props.customer.name : '')
    const [address, setAddress] = useState(props.update ? props.customer.address : '')
    const [mobileNumber, setMobileNumber] = useState(props.update ? props.customer.mobileNumber : '')
    const [error, setError] = useState('')
    const [emptyFields, setEmptyFields]  = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const customer = {name , address ,mobileNumber, id: props.customer?._id }
        if(props.update){
            updateCustomer(customer,setError,setEmptyFields,setName,setAddress,setMobileNumber)
            .then((isUpdated)=>{
              if(isUpdated){
                fetchCustomers()
                props.setIsOpen(false)
              }
            }
            );
        }else{
            addCustomer(customer,setError,setEmptyFields,setName,setAddress,setMobileNumber)
            .then(()=>fetchCustomers());
        }

    }
    return (<form className='create' onSubmit={handleSubmit}>
        <h3>{props.update ? 'Update Customer': 'Add a New Customer'}</h3>
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
        {props.update && <button className='error-button' onClick={()=>props.setIsOpen(false)}>Cancel</button> }
        <button>{props.update ? 'Update Customer': 'Add Customer'}</button>
        {error && <div className='error'>{error} {emptyFields?.length > 0 ?':': null} {emptyFields?.map((field)=><span> {field} </span>)}</div>}
    </form>)
}
export default CustomerForm