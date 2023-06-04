import {deleteCustomer} from '../apis/customers' 
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import CustomerForm from './CustomerForm';

const CustomerDetails = ({customer})=>{  

const [isOpen, setIsOpen] = useState(false);

    return <div className="customer-details">
        <h4>{customer.name}</h4>
        <p><strong>Adress: </strong>{customer.address}</p>
        <p><strong>Mobile Number: </strong>{customer.mobileNumber}</p>
        <p>{customer.createdAt}</p>
        <span className='material-symbols-outlined' onClick={()=> customer._id && deleteCustomer(customer._id)}>delete</span>
        <span className='material-symbols-outlined' id='edit' onClick={setIsOpen}>edit</span>
        <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        className="pop-up">
            <div className='update-customer-form'>
        <CustomerForm update = {true} customer={customer} setIsOpen ={setIsOpen} />
        </div>
      </ReactModal>
    </div>
}
export default CustomerDetails