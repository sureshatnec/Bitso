import axios from 'axios';

export default function getBitsoData()
{
    const BITSO_URL = "https://api.bitso.com/v3/ticker/?book=btc_mxn";

    // Make a request for a user with a given ID
    axios.get(BITSO_URL)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
