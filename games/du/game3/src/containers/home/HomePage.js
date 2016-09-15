import React, {Component} from 'react';
import FlickrSearch from '../../components/flickrSearch/flickrSearch.component';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Search Flickr By Tag</h1>
                <FlickrSearch/>
            </div>
        );
    }
}

export default HomePage;