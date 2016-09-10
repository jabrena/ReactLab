//Searches flickr by tag using ajax request

import axios from 'axios';


const searchFlickrViaTag = function (callack) {

    // axios.get('http://www.flickr.com/services/feeds/photos_public.gne?tags=fish&format=json&jsoncallback=?')
    //     .then(function (response) {

    //         const newStuff = {};

    //         console.log(response);
    //         callack(response, null);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         callack(null, error);
    //     });

    callack("something", null);

};

export default searchFlickrViaTag;