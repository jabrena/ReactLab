import searchFlickrTag from './searchFlickrTag';
import assert from 'assert';


describe('searchFlickrTag tests', function () {
    it('should return an array of flickrItems', function (done) {

        searchFlickrTag(function(response, error){

            if (error != null) throw error;
            console.log(response);
            
            done();

        });        
    });

});