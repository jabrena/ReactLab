import getPoliceForces from './getPoliceForces';
import assert from 'assert';


describe('get list of police forces', function () {
    it('should return list of police forces', function (done) {

        getPoliceForces(function(response, error){

            if (error != null) throw error;

            assert.notEqual(response, undefined);
            assert.equal(response.length > 0, true);

            done();

        });        
    });

});