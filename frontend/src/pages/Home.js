import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCustomers } from "../apis/customers";
import CustomerDetails from "../components/CustomerDetails";
import CustomerForm from "../components/CustomerForm";

const Home = () => {
  const customers = useSelector((state) => state.customers);

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="home">
      <div className="customers">
        {customers &&
          customers.map((customer) => (
            <CustomerDetails key={customer._id} customer={customer} />
          ))}
      </div>
      <CustomerForm />
    </div>
  );
};
export default Home;
