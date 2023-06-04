import { store } from "../redux/store";
import {
  setCustomersState,
  deleteCustomerState,
} from "../redux/slices/customersSlice";

export const fetchCustomers = async () => {
  const response = await fetch("/customers");
  const json = await response.json();
  if (response.ok) {
    store.dispatch(setCustomersState(json));
  }
};

export const addCustomer = async (
  customer,
  setError,
  setEmptyFields,
  setName,
  setAddress,
  setMobileNumber
) => {
  const response = await fetch("/customers", {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    setError(json.error);
    setEmptyFields(json.emptyFields);
  } else {
    setError(null);
    setEmptyFields([]);
    setName("");
    setAddress("");
    setMobileNumber("");
    console.log("New Customer Added:", json);
  }
};

export const deleteCustomer = async (id) => {
  const response = await fetch(`/customers/${id}`, {
    method: "DELETE",
  });
  const json = await response.json();

  if (response.ok) {
    store.dispatch(deleteCustomerState(json._id));
  }
};
