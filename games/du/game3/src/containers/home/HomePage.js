import React, {Component} from 'react';
// import PoliceForceItem from '../../components/policeForceItem/PoliceForceItem.component';
import GetPoliceForces from '../../actions/getPoliceForces';

class HomePage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            policeForces: []
        };

        this.loadListOfPoliceForces = this.loadListOfPoliceForces.bind(this);
        this.clearListOfPoliceForces = this.clearListOfPoliceForces.bind(this);
    }

    loadListOfPoliceForces() {
        var _this = this;
        GetPoliceForces(function (response, error) {
            if (response != null && error == null) {
                _this.setState({ policeForces: response });
            }

        });
    }

    clearListOfPoliceForces() {

        this.setState( { policeForces: [] } );

    }

    render() {
        return (
            <div>
                <h1>Police Forces List: </h1>
                <button onClick={this.loadListOfPoliceForces}>Fetch Police Forces</button>
                <button onClick={this.clearListOfPoliceForces}>Clear List</button>
                <ul>
                    {this.state.policeForces.map(function (force) {
                        return <li key={force.id}>{force.name}</li>;
                    }) }
                </ul>
            </div>
        );
    }
}

export default HomePage;