export const fetchCustomers = async (setCustomers)=>{
    const response = await fetch('/customers')
    const json = await response.json()
    if(response.ok){
      setCustomers(json)
    }
  }

  export const addCustomer = async (customer,setError,setName,setAddress,setMobileNumber)=>{
    const response = await fetch('/customers',{
        method:'POST',
        body:JSON.stringify(customer),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    if(!response.ok){
        setError(json.error)
     }else{
        setError(null)
        setName('')
        setAddress('')
        setMobileNumber('')
        console.log('New Customer Added:',json)
     }

  }