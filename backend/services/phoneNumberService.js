const axios = require('axios');
require('dotenv').config()

const validatePhoneNumber = async (req,res) => {
      if(!req.query.phoneNumber) res.status(404).json({mssg: 'Phone Number Input Not Valid'});

      // Make a request to the NumVerify API
     axios.get(`http://apilayer.net/api/validate?access_key=${process.env.PHONENUMBER_API_KEY}&number=${req.query.phoneNumber}&format=1`).then(response => {
        if(response?.data?.valid){
            const countryCode = response.data.country_code;
            const countryName = response.data.country_name;
            const operatorName = response.data.carrier;
      
            return res.status(200).json({
                countryCode,
                countryName,
                operatorName
            });
        }else{
            return res.status(404).json({mssg: 'Phone Number Not Valid'});
        }
      })
      .catch(error => {
        res.status(500).send(error);
      });
}

module.exports = {
    validatePhoneNumber
}