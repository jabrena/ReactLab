import React, {Component} from 'react';
import FlickrItem from '../flickrItem/flickrItem.component';

class FlickrSearch extends Component {

    render() {

        const testItem = {
			title: "nuova casa per bloodymario",
			media: "http://farm9.staticflickr.com/8307/29502187031_e774c9d35d_m.jpg",
            description: "Test Description",
			author: "nobody@flickr.com (Imaginaris ph)"
        };

        return (
            <div>
                <h3>SearchFieldHere</h3>
                <FlickrItem flickrItem={testItem} />
            </div>
        );
    }
}

export default FlickrSearch;