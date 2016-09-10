//Searches flickr by tag using ajax request

import axios from 'axios';


const searchFlickrViaTag = function (callack) {

    axios.get('http://www.flickr.com/services/feeds/photos_public.gne?tags=fish&format=json')
        .then(function (response) {

        
            const fixCrappyFlickrApi = response.data.replace('jsonFlickrFeed(', '').replace('})', '}');
            
            const jsonResponse = JSON.parse(fixCrappyFlickrApi);

            callack(jsonResponse, null);
        })
        .catch(function (error) {

            const newStuff = {};
            callack(null, error);
        });

};

export default searchFlickrViaTag;