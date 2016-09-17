import React, {Component, PropTypes} from 'react';

class PoliceForceItem extends Component {
    render() {
        return (
            <div>
                <hr/>
                <p>{this.props.policeForceItem.id}</p>
                <p>{this.props.policeForceItem.name}</p>
                <hr/>
            </div>
        );
    }
}

PoliceForceItem.propTypes = {
    policeForceItem: PropTypes.object
};

export default PoliceForceItem;