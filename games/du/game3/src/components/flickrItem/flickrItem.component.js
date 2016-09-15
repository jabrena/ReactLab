import React, {Component, PropTypes} from 'react';

class FlickrItem extends Component {
    render() {
        return (
            <div>
                <hr/>
                <p>{this.props.flickrItem.title}</p>
                <p>{this.props.flickrItem.media}</p>
                <p>{this.props.flickrItem.description}</p>
                <p>{this.props.flickrItem.author}</p>
                <p>{this.props.flickrItem.tags}</p>
                <hr/>
            </div>
        );
    }
}

FlickrItem.propTypes = {
    flickrItem: PropTypes.object
};

export default FlickrItem;