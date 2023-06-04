import { useEffect, useState } from 'react'
import {fetchCustomers} from '../apis/customers'
import CustomerDetails from '../components/CustomerDetails'
import CustomerForm from '../components/CustomerForm'

const Home = () => {

  const [customers,setCustomers] = useState(null)

  useEffect(()=>{
    fetchCustomers(setCustomers)
  },[])

  return (
    <div className="home">
      <div className='customers'>
        {customers && customers.map((customer)=>(
         <CustomerDetails key={customer._id} customer={customer}/>
        ))}
      </div>
      <CustomerForm/>
    </div>
  );
};
export default Home;
