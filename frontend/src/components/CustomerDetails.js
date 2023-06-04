const CustomerDetails = ({customer})=>{
    return <div className="customer-details">
        <h4>{customer.name}</h4>
        <p><strong>Adress: </strong>{customer.address}</p>
        <p><strong>Mobile Number: </strong>{customer.mobileNumber}</p>
        <p>{customer.createdAt}</p>
    </div>
}
export default CustomerDetails