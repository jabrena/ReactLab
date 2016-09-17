//Searches flickr by tag using ajax request

import axios from 'axios';


const getPoliceForces = function (callack) {

    axios.get('https://data.police.uk/api/forces')
        .then(function (response) {
            callack(response.data, null);
        })
        .catch(function (error) {
            callack(null, error);
        });

};

export default getPoliceForces;